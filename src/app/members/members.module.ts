import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersPageRoutingModule } from './members-routing.module';

import { MembersPage } from './members.page';
import { FilterModalPageModule } from '../filter-modal/filter-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersPageRoutingModule,
    FilterModalPageModule
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
