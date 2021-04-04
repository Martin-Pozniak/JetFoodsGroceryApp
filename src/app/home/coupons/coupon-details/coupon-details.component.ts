import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Coupon } from 'src/app/models/coupon.model';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.scss'],
})
export class CouponDetailsComponent implements OnInit {

  @Input() coupon: Coupon;

  constructor( private ctrlModal: ModalController) { }

  ngOnInit() {}

  public onCloseModal() {
    this.ctrlModal.dismiss();
  }

  public getValidLocations( coupon: Coupon) {
    //MP - improve
    return coupon.validLocationIds;
  }

}
