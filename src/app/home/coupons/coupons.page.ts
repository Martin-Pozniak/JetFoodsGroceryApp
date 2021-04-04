import { Component, OnInit } from '@angular/core';

import { Coupon } from 'src/app/models/coupon.model';
import { User } from 'src/app/models/user.model';
import { CouponsService } from 'src/app/services/coupons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {

  public lstLoadedActiveCoupons: Coupon[];
  public currentUser: User = this.svcUser.getCurrentUser();

  constructor( private svcCoupon: CouponsService,
               private svcUser: UserService ) { }

  ngOnInit() {
    this.lstLoadedActiveCoupons = this.svcCoupon.getActiveCoupons();
  }

  public isAdmin( user: User ): boolean {
    return this.svcUser.isAdmin(user);
  }

}
