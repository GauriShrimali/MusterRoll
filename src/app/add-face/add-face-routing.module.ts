import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFacePage } from './add-face.page';

const routes: Routes = [
  {
    path: '',
    component: AddFacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFacePageRoutingModule {}
