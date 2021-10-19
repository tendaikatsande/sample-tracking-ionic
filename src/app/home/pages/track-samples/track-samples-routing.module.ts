import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackSamplesPage } from './track-samples.page';

const routes: Routes = [
  {
    path: '',
    component: TrackSamplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackSamplesPageRoutingModule {}
