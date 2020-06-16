import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeofencePage } from './geofence.page';

describe('GeofencePage', () => {
  let component: GeofencePage;
  let fixture: ComponentFixture<GeofencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeofencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeofencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
