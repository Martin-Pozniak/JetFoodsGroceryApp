import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { StoreLocatorComponent } from 'src/app/shared/components/store-locator/store-locator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule
  ],
  declarations: [
    OverviewPage,
    StoreLocatorComponent
  ]
})
export class OverviewPageModule {}
