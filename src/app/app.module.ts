import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './components/floating-banner/floating-banner.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { TimerComponent } from './components/timer/timer.component';
import { StartTimerComponent } from './components/timer/start-timer/start-timer.component';
import { TimerLogComponent } from './components/timer/timer-log/timer-log.component';
import { ClickLogComponent } from './components/timer/click-log/click-log.component';
import { FormsModule } from '@angular/forms';
import { TimerWithServiceComponent } from './components/timer-with-service/timer-with-service.component';
import { ClickLogServiceComponent } from './components/timer-with-service/click-log-service/click-log-service.component';
import { TimerServiceComponent } from './components/timer-with-service/timer-service/timer-service.component';
import { StartTimerServiceComponent } from './components/timer-with-service/start-timer-service/start-timer-service.component';
import { StudentMarksTableComponent } from './components/student-marks-table/student-marks-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicallyDivComponent } from './components/dynamically-div/dynamically-div.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    CartViewComponent,
    TimerComponent,
    StartTimerComponent,
    TimerLogComponent,
    ClickLogComponent,
    TimerWithServiceComponent,
    ClickLogServiceComponent,
    TimerServiceComponent,
    StartTimerServiceComponent,
    StudentMarksTableComponent,
    DynamicallyDivComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatSortModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
