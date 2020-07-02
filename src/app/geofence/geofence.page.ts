/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
const { Geolocation } = Plugins;

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.page.html',
  styleUrls: ['./geofence.page.scss'],
})
export class GeofencePage implements OnInit {
  locations: Observable<any>;
  checkLocation: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;
  geofenceCollection: AngularFirestoreCollection<any>;
  user = null;

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  markers = [];

  listenerHandle: any;
  path = [];
  latLngArray = [];
  fence: any;
  allFences = [];
  isTracking = false;
  isCreating = false;
  isEditing = false;
  isVisible = false;
  watch = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.anonLogin();
   }

  ionViewWillEnter() {
    this.loadMap();
  }

  loadMap() {
    const latLng = new google.maps.LatLng(24.622102, 73.708055);

    const mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  anonLogin() {
    this.afAuth.signInAnonymously().then(ref => {
      this.user = ref.user;
      // console.log('user: ', this.user);

      this.locationsCollection = this.afs.collection(
        'locations/${this.user.uid}/track',
        // tslint:disable-next-line: no-shadowed-variable
        ref => ref.orderBy('timestamp')
      );

      // load firebase data
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
      // update map
      this.locations.subscribe(locations => {
        // console.log('new locations: ', locations);
        // this.updateMap(locations);
      });
    });
  }

  updateMap(locations) {
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];

    for (const loc of locations) {
      const latLng = new google.maps.LatLng(loc.lat, loc.lng);

      const marker = new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        map: this.map
      });
      this.markers.push(marker);
    }
  }

  addNewLocation(lat, lng, timestamp) {
    this.locationsCollection.add({
      lat,
      lng,
      timestamp
    });

    const position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position);
    this.map.setZoom(15);
  }

  startTracking() {
    this.isTracking = true;
    this.watch = Geolocation.watchPosition({}, (position, err) => {
      // console.log('new position: ', position);
      if (position) {
        this.addNewLocation(
          position.coords.latitude,
          position.coords.longitude,
          position.timestamp
        );
      }
    });
  }

  stopTracking() {
    Geolocation.clearWatch({ id: this.watch }).then(() => {
      this.isTracking = false;
    });
  }

  deleteLocation(pos) {
    this.locationsCollection.doc(pos.id).delete();
  }

  addNewCoords(obj) {
    this.geofenceCollection.add({obj, department: 'IT'});
  }

  showFences() {
    this.isVisible = true;
    this.afs.collection<any>('geofences', ref => ref.where('department', '==', 'IT'))
    .valueChanges().subscribe(data => {
      data.forEach(fenceData => {
        fenceData.obj.forEach(coord => {
          this.path.push(new google.maps.LatLng(coord));
        });
        console.log('Inside showFences', this.path);
        this.createFence();
        this.fence.setEditable(false);
      });
    });
  }

  hideFences() {
    this.isVisible = false;
    this.allFences.forEach(fence => {
      fence.setVisible(false);
    });
    this.allFences = [];
  }

  editGeofence() {
    this.isCreating = true;
    this.listenerHandle = this.map.addListener('click', mapsMouseEvent => {
      const coord = mapsMouseEvent.latLng;
      this.placeMarker(coord);
    });
  }

  createFence() {
    this.fence = new google.maps.Polygon({
      paths: this.path,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.4,
      editable: true
    });
    this.path = [];
    this.fence.setMap(this.map);
    this.allFences.push(this.fence);
    console.log('All Fences', this.allFences);
  }

  placeGeofence() {
    google.maps.event.removeListener(this.listenerHandle);
    this.isEditing = true;
    console.log('Inside placeGeofence', this.path);
    this.createFence();
    this.markers.forEach(marker => {
      marker.setMap(null);
    });
    this.markers = [];
  }

  saveGeofence() {
    this.isCreating = false;
    this.isEditing = false;
    this.fence.setEditable(false);
    this.geofenceCollection = this.afs.collection('geofences');
    this.fence.getPath().getArray().forEach(coord => {
      const lat = coord.lat();
      const lng = coord.lng();
      this.latLngArray.push({lat, lng});
    });
    console.log(this.latLngArray);
    this.addNewCoords(this.latLngArray);
    this.latLngArray = [];
  }

  placeMarker(latLng) {
    this.path = this.path.concat(latLng);
    // console.log(this.path);
    const marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.BOUNCE,
      map: this.map
    });
    this.markers.push(marker);
  }

  inOrOut() {
    const pos = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(24.622102, 73.708055), this.fence);
    if (pos) {
      console.log('Inside Geofence');
    } else {
      console.log('Outside Geofence');
    }
  }

  // checkLocation.interval(10000).takeWhile(() => true).subscribe(() => this.inOrOut());

  ngOnInit() {
  }

}
