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

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    CartViewComponent,
    TimerComponent,
    StartTimerComponent,
    TimerLogComponent,
    ClickLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
