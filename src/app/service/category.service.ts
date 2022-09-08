import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'https://laravel-angular-blog-backend.herokuapp.com/api/category';
  constructor(private http: HttpClient) {}

  index(): Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url);
  }

  store(data: any):Observable<Category[]> {
    return this.http.post<Category[]>(this.url, data);
  }

  show(id: number):Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/${id}`);
  }

  update(id:number,data:any):Observable<Category[]>{
    return this.http.put<Category[]>(`${this.url}/${id}`,data)
  }

  destroy(id:number):Observable<Category[]>{
    return this.http.delete<Category[]>(`${this.url}/${id}`)
  }

}
