import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { DynamicallyDivComponent } from './components/dynamically-div/dynamically-div.component';
import { FloatingBannerComponent } from './components/floating-banner/floating-banner.component';
import { StudentMarksTableComponent } from './components/student-marks-table/student-marks-table.component';
import { TimerWithServiceComponent } from './components/timer-with-service/timer-with-service.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: 'floatinBanner', component: FloatingBannerComponent },
  { path: 'cartView', component: CartViewComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'timerWithService', component: TimerWithServiceComponent },
  { path: 'studentMarks', component: StudentMarksTableComponent },
  { path: 'dynamicDiv', component: DynamicallyDivComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
