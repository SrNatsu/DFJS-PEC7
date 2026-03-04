import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { ArticleList } from './pages/articles/article-list/article-list';
import { ArticleCreation } from './pages/articles/article-creation/article-creation';
import { authenticationTokenGuard } from './core/guards/authentication-token-guard';
import { ArticleDetails } from './pages/articles/article-details/article-details';

export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: Login,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: Register,
  },
  {
    path: 'article/list',
    pathMatch: 'full',
    component: ArticleList,
  },
  {
    path: 'article/create',
    pathMatch: 'full',
    component: ArticleCreation,
    canActivate: [authenticationTokenGuard],
  },
  {
    path: 'article/:id',
    pathMatch: 'full',
    component: ArticleDetails,
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'login',
  },
];
