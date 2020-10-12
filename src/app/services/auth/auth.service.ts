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
  ) {
    this.store.set('isLoggedIn', this.getDefaultLoggedInState());
  }

  private getDefaultLoggedInState(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  signIn(credentials): Observable<any> {
    return this.apiService.post(`${this.apiPrefix}/login`, credentials).pipe(
      map((response) => {
        localStorage.setItem('isLoggedIn', 'true');
        this.store.set('isLoggedIn', true);
        this.router.navigate(['cameras']);
        return response;
      })
    );
  }

  signOut(): Observable<any> {
    return this.apiService.delete(`${this.apiPrefix}/logout`).pipe(
      map((response) => {
        localStorage.removeItem('isLoggedIn');
        this.store.set('isLoggedIn', false);
        this.router.navigateByUrl('login');
        return response;
      })
    );
  }
}
