import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackSamplesPageRoutingModule } from './track-samples-routing.module';

import { TrackSamplesPage } from './track-samples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackSamplesPageRoutingModule
  ],
  declarations: [TrackSamplesPage]
})
export class TrackSamplesPageModule {}
