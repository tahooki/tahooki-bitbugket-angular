import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { SessionStorageService } from 'app/core/modules/storage/session/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  // 로그인 후 리다이렉트 할 url
  redirectUrl: string;

  loginUser: any;

  defaultRouteUrl: string = '/main';

  loginUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _router: Router,
              private _session: SessionStorageService) {
    const loginUser = this._session.get('loginUser');

    if (loginUser) {
      this.login(loginUser);
    } else {
      this.logout(true);
    }
  }

  rxLoginUser(): Observable<any> {
    return this.loginUser$;
  }

  login(loginUser: any): void {
    if (!loginUser) {
      return;
    }

    this._session.set('loginUser', loginUser);

    this.setLoginUser(loginUser);
    this.isLoggedIn = true;

    this.loginUser$.next(loginUser);
  }

  setLoginUserSession(loginUser: any): void {
    this._session.set('loginUser', loginUser);
    this.setLoginUser(loginUser);
    this.loginUser$.next(loginUser);
  }

  hasSavedId() {
    let result = false;

    if (this._session.get('login-hasSavedId')) {
      result = true;
    }

    return result;
  }

  saveId(id: string) {
    this._session.set('login-hasSavedId', true);
    this._session.set('login-savedId', id);
  }

  clearSavedId() {
    this._session.clear('login-hasSavedId');
    this._session.clear('login-savedId');
  }

  getSavedId() {
    let result = '';

    if (this._session.get('login-hasSavedId')) {
      result = this._session.get('login-savedId');
    }

    return result;
  }

  getLoginUser(): any {
    let result = null;

    if (this.checkLogin()) {
      result = this.loginUser;
    }

    return result;
  }

  setLoginUser(loginUser: any): any {
    this.loginUser = loginUser;
  }

  checkLogin(): boolean {
    if (!this.loginUser) {
      this.login(this._session.get('loginUser'));
    }

    if (this.isLoggedIn || this.loginUser) {
      this.isLoggedIn = true;
      return true;
    }

    return false;
  }

  logout(isNotRoute?: boolean): void {
    this._session.clearAll();

    this.loginUser$.next(null);

    this.isLoggedIn = false;
    this.setLoginUser(null);

    if (!isNotRoute) {
      this._router.navigate(['/user/login']);
    }
  }

  routeRedirectPage() {
    this._router.navigateByUrl(this.redirectUrl || this.defaultRouteUrl);
  }
}
