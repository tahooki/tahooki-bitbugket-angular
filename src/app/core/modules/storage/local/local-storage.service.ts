import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private _storage: Storage;

  private _storageType: string = 'localStorage';

  private _prefix: string = 'tahooki_';

  private _isSupport: boolean = false;

  constructor() {
    this._setLocalStorage();
  }

  get(key: string, prefix?: string): any {
    if (this._isSupport) {
      const deriveKey = this._deriveKey(key, prefix);
      let storageResult;
      if (this._storage.getItem(deriveKey)) {
        storageResult = JSON.parse(this._storage.getItem(deriveKey));
      }
      return storageResult;
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
      for (const localKey in this._storage) {
        const derivedKey = this._deriveKey(key, prefix);
        if (localKey === derivedKey) {
          this._storage.removeItem(derivedKey);
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

  private _setLocalStorage(): void {

    if (window && window[<any>this._storageType] !== undefined) {
      this._storage   = <any>window[<any>this._storageType];
      this._isSupport = true;
    } else {
      this._isSupport = false;
      console.error(`This Browser is not supported: ${this._storageType}`);
    }
  }
}
