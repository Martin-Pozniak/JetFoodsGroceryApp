import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreLocatorPageRoutingModule } from './store-locator-routing.module';

import { StoreLocatorPage } from './store-locator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreLocatorPageRoutingModule
  ],
  declarations: [
    StoreLocatorPage
  ]
})
export class StoreLocatorPageModule {}
