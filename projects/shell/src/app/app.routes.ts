import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => loadRemoteModule('portfolio', './Routes').then((r) => r.routes),
  },
  {
    path: 'blog',
    loadChildren: () => loadRemoteModule('blog', './Routes').then((r) => r.routes),
  },
];
