import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartViewRoutingModule } from './cart-view-routing.module';
import { CartViewComponent } from './cart-view.component';

@NgModule({
  declarations: [CartViewComponent],
  imports: [CommonModule, CartViewRoutingModule],
})
export class CartViewModule {}
