import { Component, Injector, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { DemoElementTestModalComponent } from 'app/web/routes/demo-elements/test-modal/demo-element-test-modal.component';
import { createComponent } from '@angular/compiler/src/core';

@Component({
  selector:    'app-demo-element',
  templateUrl: './demo-elements.component.html',
  styleUrls:   ['./demo-elements.component.scss']
})
export class DemoElementsComponent implements OnInit {
  content: SafeHtml = null;

  constructor(private _injector: Injector,
              private _domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    let a = {
      b: 'test'
    };

    const modal = createCustomElement(DemoElementTestModalComponent, {injector: this._injector});
    customElements.define('test-modal', modal);
    this.content = this._domSanitizer.bypassSecurityTrustHtml(`<test-modal params='${a}' test='${this.onTest}'></test-modal>`);

    // Object 데이터를 보내지 못함.. ㅇㅅㅇ 흠냐뤼..
    // 평범한 element를 생성한거임.
    // 데이터를 전달 받기 어려움. ㅇㅅㅇa
    // output 받기도 어려운듯..
    // component 생성기를 사용해야 할듯.
  }

  onTest(params) {
    console.log('test', params);
  }
}
