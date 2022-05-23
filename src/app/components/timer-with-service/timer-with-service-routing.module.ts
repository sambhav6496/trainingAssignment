import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerWithServiceComponent } from './timer-with-service.component';

const routes: Routes = [{ path: '', component: TimerWithServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerWithServiceRoutingModule {}
