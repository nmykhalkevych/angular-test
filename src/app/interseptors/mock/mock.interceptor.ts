import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { cameras } from 'src/app/constants/cameras';
import { getRandomNumber } from 'src/app/utils/randomNumber';
import { images } from 'src/app/constants/images';
import { generateCameras } from 'src/app/utils/generateCameras';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/api/auth/login') && request.method === 'POST') {
      console.log(request);
      return of(
        new HttpResponse({
          status: 200,
          body: {
            name: request.body.username,
          },
        })
      );
    }
    if (
      request.url.endsWith('/api/auth/logout') &&
      request.method === 'DELETE'
    ) {
      return of(
        new HttpResponse({
          status: 200,
        })
      );
    }
    if (request.url.endsWith('/api/cameras') && request.method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            cameras: generateCameras(),
          },
        })
      );
    }
    return next.handle(request);
  }
}
