import { Routes } from '@angular/router';
import { ArticleList } from '../../pages/articles/article-list/article-list';
import { ArticleCreation } from '../../pages/articles/article-creation/article-creation';
import { ArticleDetails } from '../../pages/articles/article-details/article-details';
import { authenticationTokenGuard } from '../../core/guards/authentication-token-guard';

export const ARTICLE_ROUTES: Routes = [
  {
    path: 'list',
    component: ArticleList,
  },
  {
    path: 'create',
    component: ArticleCreation,
    canActivate: [authenticationTokenGuard],
  },
  {
    path: ':id',
    component: ArticleDetails,
  },
];
