import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCouponPage } from './create-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCouponPageRoutingModule {}
