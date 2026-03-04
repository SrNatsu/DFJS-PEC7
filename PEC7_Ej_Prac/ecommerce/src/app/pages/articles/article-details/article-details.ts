import { Component, signal, inject } from '@angular/core';
import { Article } from '../../../shared/models/article';
import { Router, RouterLink } from '@angular/router';
import { ImagePipe } from '../../../shared/pipes/image-pipe';
import { PricePipe } from '../../../shared/pipes/price-pipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-article-details',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    ImagePipe,
    PricePipe,
  ],
  templateUrl: './article-details.html',
  styleUrl: './article-details.scss',
})
export class ArticleDetails {
  private router = inject(Router);

  article = signal<Article | null>(null);

  constructor() {
    const navigation = this.router.currentNavigation();
    const passedArticle = navigation?.extras.state?.['articleData'] || history.state.articleData;

    if (passedArticle) {
      this.article.set(passedArticle);
    } else {
      console.warn('Article not found. Redirecting...');
      this.router.navigate(['/article/list']);
    }
  }
}
