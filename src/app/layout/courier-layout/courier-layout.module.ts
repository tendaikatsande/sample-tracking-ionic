import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourierLayoutPageRoutingModule } from './courier-layout-routing.module';

import { CourierLayoutPage } from './courier-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourierLayoutPageRoutingModule
  ],
  declarations: [CourierLayoutPage]
})
export class CourierLayoutPageModule {}
