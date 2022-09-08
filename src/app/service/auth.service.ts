import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://laravel-angular-blog-backend.herokuapp.com/api";
  constructor(private http:HttpClient) { }

  login(data:any):Observable<User>
  {
    return this.http.post<User>(`${this.url}/login`,data);
  }

  user():Observable<User>
  {
    return this.http.get<User>(`${this.url}/user`);
  }

  logout():Observable<User>
  {
    return this.http.post<User>(`${this.url}/logout`,{});
  }

}
