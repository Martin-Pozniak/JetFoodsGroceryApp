import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreLocatorPageRoutingModule } from './store-locator-routing.module';

import { StoreLocatorPage } from './store-locator.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreLocatorPageRoutingModule,
    SharedModule
  ],
  declarations: [
    StoreLocatorPage
  ]
})
export class StoreLocatorPageModule {}
