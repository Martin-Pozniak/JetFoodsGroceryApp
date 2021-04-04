import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCouponPageRoutingModule } from './create-coupon-routing.module';

import { CreateCouponPage } from './create-coupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCouponPageRoutingModule
  ],
  declarations: [CreateCouponPage]
})
export class CreateCouponPageModule {}
