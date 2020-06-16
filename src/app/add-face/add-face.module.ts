import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFacePageRoutingModule } from './add-face-routing.module';

import { AddFacePage } from './add-face.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFacePageRoutingModule
  ],
  declarations: [AddFacePage]
})
export class AddFacePageModule {}
