import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewShipmentPageRoutingModule } from './view-shipment-routing.module';

import { ViewShipmentPage } from './view-shipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewShipmentPageRoutingModule
  ],
  declarations: [ViewShipmentPage]
})
export class ViewShipmentPageModule {}
