import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientTilePage } from './patient-tile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientTilePageRoutingModule {}
