import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const state: State = {
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  languages: ['en', 'ua'],
  defaultLang: localStorage.getItem('lang') || 'en',
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};
@Injectable({
  providedIn: 'root',
})
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  get value() {
    return this.subject.value;
  }

  set(name: string, statePayload: any) {
    this.subject.next({
      ...this.value,
      [name]: statePayload,
    });
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }
}

const defaultState = () => {};
