import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicallyDivComponent } from './dynamically-div.component';

@NgModule({
  declarations: [DynamicallyDivComponent],
  imports: [CommonModule, DynamicRoutingModule],
})
export class DynamicModule {}
