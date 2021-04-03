import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss'],
})
export class CouponCardComponent implements OnInit {

  @Input() coupon: Coupon;
  @Input() isSlideImage: boolean;
  @Input() showButton: boolean;

  constructor() {

    this.isSlideImage = false;
    this.showButton = false;

  }

  ngOnInit() {}

}
