
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.page').then((m) => m.AdminPage),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/admin/users/users.page').then((m) => m.UsersPage),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./pages/admin/analytics/analytics.page').then((m) => m.AnalyticsPage),
  },
  {
    path: 'activity',
    loadComponent: () =>
      import('./pages/admin/activity/activity.page').then((m) => m.ActivityPage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/admin/settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
