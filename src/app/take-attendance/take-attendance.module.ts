import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeAttendancePageRoutingModule } from './take-attendance-routing.module';

import { TakeAttendancePage } from './take-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeAttendancePageRoutingModule
  ],
  declarations: [TakeAttendancePage]
})
export class TakeAttendancePageModule {}
