import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyFacePage } from './verify-face.page';

describe('VerifyFacePage', () => {
  let component: VerifyFacePage;
  let fixture: ComponentFixture<VerifyFacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyFacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyFacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
