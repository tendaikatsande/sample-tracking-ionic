import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewShipmentPage } from './view-shipment.page';

const routes: Routes = [
  {
    path: '',
    component: ViewShipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewShipmentPageRoutingModule {}
