import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

import { StudentMarksRoutingModule } from './student-marks-routing.module';
import { StudentMarksTableComponent } from './student-marks-table.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StudentMarksTableComponent],
  imports: [CommonModule, StudentMarksRoutingModule, MatSortModule],
})
export class StudentMarksModule {}
