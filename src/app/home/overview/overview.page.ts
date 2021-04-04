import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';
import { User } from 'src/app/models/user.model';
import { CouponsService } from 'src/app/services/coupons.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  public user: User = this.svcUser.getCurrentUser();
  public lstCoupon: Coupon[];

  public slideOptions = {
    slidesPerView: 2,
    spaceBetween: 0
  };

  constructor( private svcUser: UserService,
               private svcCoupons: CouponsService ) { }

  ngOnInit() {
    this.lstCoupon = this.svcCoupons.getActiveCoupons();
  }

}
