import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Hospital } from './components/hospital/hospital';
import { Queue } from './pages/queue/queue';
import { Cinema } from './components/cinema/cinema';

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
  },
  {
    path: 'cinema',
    component: Cinema
  },
  {
    path: 'queue',
    component: Queue
  }
];