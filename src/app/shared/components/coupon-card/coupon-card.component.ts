import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CouponDetailsComponent } from 'src/app/home/coupons/coupon-details/coupon-details.component';
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

  constructor( private ctrlModal: ModalController) {

    this.isSlideImage = false;
    this.showButton = false;

  }

  public ngOnInit() {}

  public openCouponDetailsModal() {

    this.ctrlModal
      .create({ component: CouponDetailsComponent, componentProps: { coupon: this.coupon } })
      .then( modalEl => {
        modalEl.present();
      });

  }

}
