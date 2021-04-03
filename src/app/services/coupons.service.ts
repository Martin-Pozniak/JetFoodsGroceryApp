import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  private _lstActiveCoupons: Coupon[] = [
    new Coupon( 'c1',
                'Spend $50, Get $5',
                'Save $5 on $50!',
                'When you spend $50 you can get $5 back!',
                'https://www.kiki-furniture.com/cms/userfiles/files/Instore-Coupon-50off(1).png',
                null,
                ['Carol Stream'],
                new Date(2021,3,31) ),
    new Coupon( 'c2',
                'Buy 1 Get 1',
                'Save 100%',
                'Its a BOGO!',
                'https://1e7npu8x7c2v3ec29y6nl9a5-wpengine.netdna-ssl.com/wp-content/uploads/6-Ways-to-Improve-your-Coupon-Marketing-Strategy-and-Increase-Sales-1024x537.png',
                null,
                ['Carol Stream'],
                new Date(2021,3,31) ),
    new Coupon( 'c3','Spend $50, Get $5',
                'Save $5 on $50!',
                'When you spend $50 you can get $5 back!',
                'https://ishli.com/wp-content/uploads/2019/08/Coupons.jpg',
                null,
                ['Carol Stream'],
                new Date(2021,3,31) ),
    new Coupon( 'c4',
                'Buy 1 Get 1',
                'Save 100%',
                'Its a BOGO!',
                'https://canada.michaels.com/static/on/demandware.static/-/Sites-MichaelsUS-Library/default/dwfcb34c83/_hp/201106-mik-ca-t2-01.png',
                null,
                ['Carol Stream'],
                new Date(2021,3,31) )
  ];

  constructor() { }

  public getActiveCoupons(): Coupon[] {
    return [...this._lstActiveCoupons];
  }

  public addActiveCoupon() {

  }

  public deleteActiveCoupon() {

  }

}
