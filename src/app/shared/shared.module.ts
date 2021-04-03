import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponCardComponent } from './components/coupon-card/coupon-card.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';



@NgModule({
  declarations: [
    CouponCardComponent,
    StoreLocatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CouponCardComponent,
    StoreLocatorComponent
  ]
})
export class SharedModule { }
