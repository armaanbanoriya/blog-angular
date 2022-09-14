import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscribers } from '../interface/subscribers';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  url = "https://laravel-angular-blog-backend.herokuapp.com/api/subscribe";
  constructor(private http: HttpClient) {}

  index(): Observable<Subscribers[]> {
    return this.http.get<Subscribers[]>(this.url);
  }

  store(data: any): Observable<Subscribers[]> {
    return this.http.post<Subscribers[]>(this.url, data);
  }

  show(id: number): Observable<Subscribers[]> {
    return this.http.get<Subscribers[]>(`${this.url}/id`);
  }

  update(id: number, data: any): Observable<Subscribers[]> {
    return this.http.put<Subscribers[]>(`${this.url}/${id}`, data);
  }

  destroy(id: number): Observable<Subscribers[]> {
    return this.http.delete<Subscribers[]>(`${this.url}/${id}`);
  }
}
