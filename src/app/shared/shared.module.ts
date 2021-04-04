import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponCardComponent } from './components/coupon-card/coupon-card.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';
import { CouponDetailsComponent } from '../home/coupons/coupon-details/coupon-details.component';



@NgModule({
  declarations: [
    CouponCardComponent,
    StoreLocatorComponent,
    CouponDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CouponCardComponent,
    StoreLocatorComponent,
    CouponDetailsComponent
  ]
})
export class SharedModule { }
