import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';
import { MostRecent } from '../interface/most-recent';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = "https://laravel-angular-blog-backend.herokuapp.com/api/post";
  customurl = "https://laravel-angular-blog-backend.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  index(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  store(data: any):Observable<Post[]> {
    return this.http.post<Post[]>(this.url, data);
  }

  show(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/${id}`);
  }

  update(id: number, data: any):Observable<Post[]> {
    return this.http.put<Post[]>(`${this.url}/${id}`, data);
  }

  destroy(id: number):Observable<Post[]> {
    return this.http.delete<Post[]>(`${this.url}/${id}`);
  }

  byCategory(id: number): Observable<MostRecent[]> {
    return this.http.get<MostRecent[]>(`${this.customurl}/bycategory/${id}`);
  }

  mostRecent(): Observable<any> {
    return this.http.get<any>(`${this.customurl}/post/mostRecent`);
  }
}
