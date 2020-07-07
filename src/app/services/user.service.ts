import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: any;
  userData$: Observable<any>;
  userRole: string;
  userUID: string;
  userRef: AngularFirestoreDocument<any>;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    console.log('user service constructor');
    // this.authService.loginStatus$()
    // .subscribe(loggedIn => {
    //   console.log('logged in subscribe');
    //   if (loggedIn) {
    //         console.log('logged in');
    //         this.afAuth.authState
    //         .pipe(map(user => user.uid))
    //         .subscribe(uid => {
    //             console.log('uid subscribe');
    //             console.log('uService uid: ', uid);
    //             this.userUID = uid;
    //             this.userRef = this.afs.doc<any>('members/' + uid);
    //             this.userRef.valueChanges()
    //             .subscribe(data => {
    //               console.log('afs data subscribe');
    //               this.userData = data;
    //               this.userRole = data.role;
    //             });
    //           });
    //       } else {
    //         console.log('logged out');
    //       }
    // });
   }

   getUser$() {
     return this.afAuth.authState
      .pipe(
        map(user => user.uid),
        switchMap(uid => this.afs.doc<any>('members/' + uid).valueChanges())
      );
   }
}
