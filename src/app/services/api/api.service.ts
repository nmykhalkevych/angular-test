import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(
    path: string,
    params = {},
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.get(path, { headers, params }).pipe(
      catchError((err) => this.formatErrors(err)),
      map(this.toJSON)
    );
  }
  post(
    path: string,
    body = {},
    params = {},
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.post(path, body, { headers, params }).pipe(
      catchError((err) => this.formatErrors(err)),
      map(this.toJSON)
    );
  }

  put(
    path: string,
    body = {},
    params = {},
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.put(path, body, { headers, params }).pipe(
      catchError((err) => this.formatErrors(err)),
      map(this.toJSON)
    );
  }

  delete(path, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.delete(path, { headers }).pipe(
      catchError((err) => this.formatErrors(err)),
      map(this.toJSON)
    );
  }

  private toJSON(response: Response) {
    return response != null && response.json != null
      ? response.json()
      : response;
  }

  private formatErrors(error: any) {
    let parsedError;

    try {
      parsedError = error.json();
    } catch (err) {}

    return throwError(parsedError || error);
  }
}
