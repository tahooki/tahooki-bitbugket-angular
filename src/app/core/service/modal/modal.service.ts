import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal$: Subject<any> = new Subject();

  isOpen: boolean = false;

  params: any;

  index: number = -1;

  constructor() {
  }

  rxModal(): Observable<any> {
    return this.modal$;
  }

  create(component: any, params?: any, index: number = -1): void {
    this.isOpen = true;

    if (params) {
      this.params = params;
    }

    if (index !== -1) {
      this.index = index;
    }

    this.modal$.next({
      component,
      params,
      isOpen: this.isOpen
    });
  }

  dismiss(callback?: (index: number) => void): void {
    this.isOpen = false;
    this.modal$.next({
      isOpen: this.isOpen
    });
    if (callback) {
      callback(this.index);
    }
  }

}
