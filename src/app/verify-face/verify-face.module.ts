import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyFacePageRoutingModule } from './verify-face-routing.module';

import { VerifyFacePage } from './verify-face.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyFacePageRoutingModule
  ],
  declarations: [VerifyFacePage]
})
export class VerifyFacePageModule {}
