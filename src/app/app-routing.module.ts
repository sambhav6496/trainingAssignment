import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { DynamicallyDivComponent } from './components/dynamically-div/dynamically-div.component';
import { FloatingBannerComponent } from './components/floating-banner/floating-banner.component';
import { StudentMarksTableComponent } from './components/student-marks-table/student-marks-table.component';
import { TimerWithServiceComponent } from './components/timer-with-service/timer-with-service.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  {
    path: 'floatinBanner',
    loadChildren: () =>
      import('./components/floating-banner/floating-banner.module').then(
        (m) => m.FloatingBannerModule
      ),
  },
  {
    path: 'cartView',
    loadChildren: () =>
      import('./components/cart-view/cart-view.module').then(
        (m) => m.CartViewModule
      ),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./components/timer/timer.module').then((m) => m.TimerModule),
  },
  {
    path: 'timerWithService',
    loadChildren: () =>
      import('./components/timer-with-service/timer-with-service.module').then(
        (m) => m.TimerWithServiceModule
      ),
  },
  {
    path: 'studentMarks',
    loadChildren: () =>
      import('./components/student-marks-table/student-marks.module').then(
        (m) => m.StudentMarksModule
      ),
  },
  {
    path: 'dynamicDiv',
    loadChildren: () =>
      import('./components/dynamically-div/dynamic.module').then(
        (m) => m.DynamicModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
