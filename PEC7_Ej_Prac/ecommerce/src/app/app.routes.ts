import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => import('./core/routes/articles.routes').then((r) => r.ARTICLE_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./core/routes/auth.routes').then((r) => r.AUTH_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
