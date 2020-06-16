import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyFingerprintPage } from './verify-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyFingerprintPageRoutingModule {}
