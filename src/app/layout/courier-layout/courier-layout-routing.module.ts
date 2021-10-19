import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourierLayoutPage } from './courier-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CourierLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourierLayoutPageRoutingModule {}
