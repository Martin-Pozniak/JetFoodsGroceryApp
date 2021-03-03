import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreLocatorPage } from './store-locator.page';

const routes: Routes = [
  {
    path: '',
    component: StoreLocatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreLocatorPageRoutingModule {}
