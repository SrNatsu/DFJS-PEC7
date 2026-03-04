import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NameArticleValidator } from '../../../core/validators/name-article-validator';
import { ArticleService } from '../../../core/services/article-service';
import { Article } from '../../../shared/models/article';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-creation',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './article-creation.html',
  styleUrl: './article-creation.scss',
})
export class ArticleCreation {
  private fb = inject(NonNullableFormBuilder);
  private articleService = inject(ArticleService);

  private urlPattern =
    /^https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}\/[a-zA-Z0-9\-\.]+(\.[a-zA-Z]{2,4})$/i;

  form = this.fb.group({
    name: ['', [Validators.required, NameArticleValidator.nameArticleValidator]],
    price: ['', [Validators.required, Validators.min(0.1)]],
    imageUrl: ['', [Validators.required, Validators.pattern(this.urlPattern)]],
    isOnSale: [false],
  });

  serverError = signal<string | null>(null);

  createArticle() {
    if (this.form.valid) {
      this.serverError.set(null);

      const formValue = this.form.getRawValue();
      const newArticle: Article = {
        ...formValue,
        price: Number(formValue.price),
        quantityInCart: 0,
        id: 0,
      };

      this.articleService.postArticle(newArticle).subscribe({
        next: () => {
          this.form.reset();
        },
        error: (e) => {
          const errorMsg = e.error?.msg || 'Server error';
          this.serverError.set(errorMsg);
        },
      });
    }
  }
}
