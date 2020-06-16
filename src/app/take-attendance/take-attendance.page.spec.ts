import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakeAttendancePage } from './take-attendance.page';

describe('TakeAttendancePage', () => {
  let component: TakeAttendancePage;
  let fixture: ComponentFixture<TakeAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAttendancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakeAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
