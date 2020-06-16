import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyFingerprintPage } from './verify-fingerprint.page';

describe('VerifyFingerprintPage', () => {
  let component: VerifyFingerprintPage;
  let fixture: ComponentFixture<VerifyFingerprintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyFingerprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyFingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
