import {
  Component, ViewContainerRef, ViewChild, OnInit, EventEmitter,
  ChangeDetectorRef, ComponentFactoryResolver
} from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { ModalService } from 'app/core/service/modal/modal.service';

@Component({
  selector:    'app-layout-modal',
  templateUrl: 'layout-modal.component.html',
  styleUrls:   ['layout-modal.component.scss']
})
export class LayoutModalComponent implements OnInit {

  isOpen: boolean = false;

  @ViewChild('target', { read: ViewContainerRef })
  target: ViewContainerRef;

  modal$: Observable<any>;

  componentReferenceList: any[] = [];

  // datepicker alert

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _resolver: ComponentFactoryResolver,
              private _modal: ModalService) {
  }

  ngOnInit() {
    // observable 가져온다!
    this.modal$ = this._modal.rxModal();

    // alertService 에서 observable 구독합니다.(isOpen => true or false)
    this.modal$.subscribe(
        (result: any) => {
          const component = result.component;
          const params    = result.params || {};
          const resolver  = result.resolver || this._resolver;

          // open 일 시 컴포넌트 생성함
          if (result.isOpen) {
            this.isOpen = true;
            this._changeDetectorRef.detectChanges();

            this._createComponent(resolver, component, params);
          }

          // open false 일 시 마지막 모달을 닫고 모달이 없을 때 isOpen false 함.
          if (!result.isOpen) {
            this.closeLastModal();

            if (this.componentReferenceList.length === 0) {
              this.isOpen = false;
            }
          }
        }
    );
  }

  /**
   * overlay 선택해서 닫을 수 있으므로 호출 시 alert 존재시 파괴!
   */
  onCloseModal() {
    this.closeLastModal();

    if (this.componentReferenceList.length === 0) {
      this.isOpen = false;
    }
  }

  closeLastModal() {
    const componentRef = this.componentReferenceList.pop();
    if (componentRef) {
      componentRef.destroy();
    }
  }

  /**
   * 매개변수로 받은 컴포넌트 팩토리를 꺼내서 target에 새로운 컴포넌트를 만들어줌.
   */
  private _createComponent(resolver: ComponentFactoryResolver, component: any, params: any) {
    const componentFactory   = resolver.resolveComponentFactory(component);
    const componentReference = this.target.createComponent(componentFactory);

    const keys          = Object.keys(params);
    const componentKeys = Object.keys(componentReference.instance);

    // EventEmitter 가 아닌 변수는 data 에서 가져온 값들로 대체
    for (const key of keys) {
      if (!(componentReference.instance[key] instanceof EventEmitter)) {
        componentReference.instance[key] = params[key];
      }
    }

    // EventEmitter 인 것들은 data 해당 값 존재시 emit 될때마다 data 펑션 실행
    for (const key of componentKeys) {
      if (componentReference.instance[key] instanceof EventEmitter && params[key]) {
        componentReference.instance[key].subscribe(
            (result: any) => {
              if (typeof params[key] === 'function') {
                params[key](result);
              }
            }
        );
      }
    }

    this.componentReferenceList.push(componentReference);
  }
}
