import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'track',
        loadChildren: () => import('./pages/track-samples/track-samples.module').then(m => m.TrackSamplesPageModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('./pages/patients/patients.module').then( m => m.PatientsPageModule)
      },
      {
        path: 'samples',
        loadChildren: () => import('./pages/samples/samples.module').then( m => m.SamplesPageModule)
      },
      {
        path: 'shipments',
        loadChildren: () => import('./pages/shipments/shipments.module').then( m => m.ShipmentsPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
