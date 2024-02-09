import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./first-page/firstPage.routes').then((m) => m.routes),
  },
  {
    path: 'second',
    loadChildren: () =>
      import('./second-page/secondPage.routes').then((m) => m.routes),
  },
];
