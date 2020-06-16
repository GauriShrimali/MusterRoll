import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyFacePage } from './verify-face.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyFacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyFacePageRoutingModule {}
