import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<User[]>,
    next: HttpHandler
  ): Observable<HttpEvent<User[]>> {
    const req = request.clone({
      withCredentials: true,
    });
    return next.handle(request);
  }
}
