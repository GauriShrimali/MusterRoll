import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyFingerprintPageRoutingModule } from './verify-fingerprint-routing.module';

import { VerifyFingerprintPage } from './verify-fingerprint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyFingerprintPageRoutingModule
  ],
  declarations: [VerifyFingerprintPage]
})
export class VerifyFingerprintPageModule {}
