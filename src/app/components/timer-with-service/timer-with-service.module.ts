import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerWithServiceRoutingModule } from './timer-with-service-routing.module';
import { TimerServiceComponent } from './timer-service/timer-service.component';
import { ClickLogServiceComponent } from './click-log-service/click-log-service.component';
import { StartTimerServiceComponent } from './start-timer-service/start-timer-service.component';
import { TimerWithServiceComponent } from './timer-with-service.component';
import { TimerService } from './timer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerServiceComponent,
    ClickLogServiceComponent,
    StartTimerServiceComponent,
    TimerWithServiceComponent,
  ],
  imports: [CommonModule, TimerWithServiceRoutingModule, FormsModule],
})
export class TimerWithServiceModule {}
