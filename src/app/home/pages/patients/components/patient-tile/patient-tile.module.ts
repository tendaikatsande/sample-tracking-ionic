import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientTilePageRoutingModule } from './patient-tile-routing.module';

import { PatientTilePage } from './patient-tile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientTilePageRoutingModule
  ],
  declarations: [PatientTilePage]
})
export class PatientTilePageModule {}
