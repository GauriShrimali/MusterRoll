import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFingerprintPage } from './add-fingerprint.page';

describe('AddFingerprintPage', () => {
  let component: AddFingerprintPage;
  let fixture: ComponentFixture<AddFingerprintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFingerprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
