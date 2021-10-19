import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'courier-layout',
    loadChildren: () => import('./layout/courier-layout/courier-layout.module').then( m => m.CourierLayoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./landing/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./layout/modals/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'view-patient',
    loadChildren: () => import('./layout/modals/view-patient/view-patient.module').then( m => m.ViewPatientPageModule)
  },
  {
    path: 'view-shipment',
    loadChildren: () => import('./layout/modals/view-shipment/view-shipment.module').then( m => m.ViewShipmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
