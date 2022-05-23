import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { ClickLogComponent } from './click-log/click-log.component';
import { StartTimerComponent } from './start-timer/start-timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerComponent,
    TimerLogComponent,
    ClickLogComponent,
    StartTimerComponent,
  ],
  imports: [CommonModule, TimerRoutingModule, FormsModule],
})
export class TimerModule {}
