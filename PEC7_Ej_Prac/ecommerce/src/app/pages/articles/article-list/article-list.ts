import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/services/article-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ArticleQuantityChange } from '../../../shared/models/article-quantity-change';
import { ArticleItem } from '../../../shared/articles/article-item/article-item';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-article-list',
  imports: [ReactiveFormsModule, ArticleItem, MatFormFieldModule, MatInputModule],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticleList implements OnInit {
  private articleService = inject(ArticleService);

  name = new FormControl('');

  articles = this.articleService.articles;

  ngOnInit(): void {
    this.articleService.getArticles();

    this.name.valueChanges.subscribe((value) => {
      this.articleService.getArticles(value ?? '');
    });
  }

  onChangeQuantity(articleQuantityChange: ArticleQuantityChange) {
    this.articleService
      .patchArticle(articleQuantityChange.article.id, articleQuantityChange.quantity)
      .subscribe();
  }
}
