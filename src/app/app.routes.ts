import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Hospital } from './components/hospital/hospital';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hospital',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'hospital',
    component: Hospital
  }
];