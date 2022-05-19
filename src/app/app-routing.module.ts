import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { FloatingBannerComponent } from './components/floating-banner/floating-banner.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  { path: 'floatinBanner', component: FloatingBannerComponent },
  { path: 'cartView', component: CartViewComponent },
  { path: 'timer' , component : TimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
