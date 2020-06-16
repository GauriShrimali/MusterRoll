import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFingerprintPageRoutingModule } from './add-fingerprint-routing.module';

import { AddFingerprintPage } from './add-fingerprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFingerprintPageRoutingModule
  ],
  declarations: [AddFingerprintPage]
})
export class AddFingerprintPageModule {}
