import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private _storage: any = {};

  get(key: string): any {
    if (this._storage[key] instanceof Array) {
      return this._storage[key].slice();
    }
    if (this._storage[key] instanceof Object) {
      return Object.assign({}, this._storage[key]);
    }

    return this._storage[key];
  }

  set(key: string, value: any): void {
    if (value instanceof Array) {
      this._storage[key] = value.slice();
    } else if (value instanceof Object) {
      this._storage[key] = Object.assign({}, value);
    } else {
      this._storage[key] = value;
    }
  }

  remove(key: string): void {
    this._storage[key] = undefined;
  }

  getAll(): any {
    return Object.assign({}, this._storage);
  }

  setAll(data: any): any {
    this._storage = Object.assign({}, data);
  }

  clearAll(): void {
    this._storage = {};
  }
}
