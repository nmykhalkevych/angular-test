import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '../../store/store';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store, private router: Router) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('isLoggedIn').pipe(
      take(1),
      map((res) => {
        if (res) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }

  resolve(): void {
    this.store.select('isLoggedIn').subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}
