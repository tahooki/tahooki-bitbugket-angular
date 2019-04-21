import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  private _storage: Storage;

  private _storageType: string = 'sessionStorage';

  private _prefix: string = 'tahooki_';

  private _isSupport: boolean = false;

  constructor() {
    this._initSessionStorage();
  }

  get(key: string, prefix?: string): any {
    if (this._isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      return JSON.parse(this._storage.getItem(deriveKey));
    }
  }

  set(key: string, value: any, prefix?: string): void {
    if (this._isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      this._storage.setItem(deriveKey, JSON.stringify(value));
    }
  }

  remove(key: string, prefix?: string): void {
    if (this._isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      this._storage.removeItem(deriveKey);
    }
  }

  clear(key: string, prefix?: string): void {
    if (this._isSupport) {
      for (const sessionKey in this._storage) {
        const derivedKey = this._deriveKey(key, prefix);
        if (sessionKey === derivedKey) {
          this._storage.removeItem(sessionKey);
          break;
        }
      }
    }
  }

  clearAll(prefix?: string): void {
    if (this._isSupport) {
      for (const key in this._storage) {
        if (key.indexOf(prefix || this._prefix) === 0) {
          this._storage.removeItem(key);
        }
      }
    }
  }

  setPrefix(prefix: string): void {
    this._prefix = prefix;
  }

  private _deriveKey(key: string, prefix?: string): string {
    if (prefix === undefined || prefix === null) {
      return `${this._prefix}${key}`;
    }
    return `${prefix}${key}`;
  }

  private _initSessionStorage(): void {
    if (window && window[<any>this._storageType] !== undefined) {
      this._storage   = <any>window[<any>this._storageType];
      this._isSupport = true;
    } else {
      this._isSupport = false;
      console.error(`This Browser is not supported: ${this._storageType}`);
    }
  }
}
