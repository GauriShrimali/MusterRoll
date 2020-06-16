import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFingerprintPage } from './add-fingerprint.page';

const routes: Routes = [
  {
    path: '',
    component: AddFingerprintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFingerprintPageRoutingModule {}
