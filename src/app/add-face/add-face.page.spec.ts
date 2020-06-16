import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFacePage } from './add-face.page';

describe('AddFacePage', () => {
  let component: AddFacePage;
  let fixture: ComponentFixture<AddFacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
