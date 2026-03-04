import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';
import { CommonModule, NgClass } from '@angular/common';
import { PricePipe } from '../../pipes/price-pipe';
import { ImagePipe } from '../../pipes/image-pipe';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-item',
  imports: [CommonModule, NgClass, PricePipe, ImagePipe, MatCardModule, RouterLink],
  templateUrl: './article-item.html',
  styleUrl: './article-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItem {
  article = input.required<Article>();
  articleQuantityChange = output<ArticleQuantityChange>();

  changeQuantity(value: number): void {
    this.articleQuantityChange.emit({
      article: this.article(),
      quantity: value,
    });
  }
}
