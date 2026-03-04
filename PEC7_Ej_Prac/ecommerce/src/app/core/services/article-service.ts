import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Article } from '../../shared/models/article';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles/';
  private http = inject(HttpClient);
  private _articles = signal<Article[]>([]);
  articles = this._articles.asReadonly();

  getArticles(query: string = ''): void {
    this.http
      .get<Article[]>(this.apiUrl, { params: { q: query } })
      .subscribe((data) => this._articles.set(data));
  }

  postArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article).pipe(
      tap((newArticle) => {
        this._articles.update((list) => [...list, newArticle]);
      }),
    );
  }

  patchArticle(article_id: number, changeInQuantity: number): Observable<Article> {
    const previousState = this._articles();

    this._articles.update((list) =>
      list.map((article) => {
        if (article.id === article_id) {
          const newTotal = (article.quantityInCart || 0) + changeInQuantity;
          return { ...article, quantityInCart: newTotal };
        }
        return article;
      }),
    );

    return this.http.patch<Article>(this.apiUrl + `${article_id}`, { changeInQuantity }).pipe(
      tap((updatedArticle) => {
        this._articles.update((list) =>
          list.map((article) =>
            article.id === article_id ? { ...article, ...updatedArticle } : article,
          ),
        );
      }),

      catchError((error) => {
        console.warn('An error in the backend occurred:', error);
        this._articles.set(previousState);
        return throwError(() => error);
      }),
    );
  }
}
