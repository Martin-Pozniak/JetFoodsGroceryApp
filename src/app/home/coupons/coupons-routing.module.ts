import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponsPage } from './coupons.page';

const routes: Routes = [
  {
    path: '',
    component: CouponsPage
  },
  {
    path: 'coupons-page',
    loadChildren: () => import('./create-coupon/create-coupon.module').then( m => m.CreateCouponPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponsPageRoutingModule {}
