import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { Store } from '../../store/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiPrefix = 'auth';
  constructor(
    private router: Router,
    private apiService: ApiService,
    private store: Store
  ) {}

  signIn(credentials): Observable<any> {
    return this.apiService.post(`${this.apiPrefix}/login`, credentials).pipe(
      map((response) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response));
        this.store.set('isLoggedIn', true);
        this.store.set('user', response);
        this.router.navigate(['cameras']);
        return response;
      })
    );
  }

  signOut(): Observable<any> {
    return this.apiService.delete(`${this.apiPrefix}/logout`).pipe(
      map((response) => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        this.store.set('isLoggedIn', false);
        this.store.set('user', null);
        this.router.navigateByUrl('login');
        return response;
      })
    );
  }
}
