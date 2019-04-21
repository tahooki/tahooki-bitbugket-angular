import { Component, Input, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-demo-portal-modal',
  templateUrl: './demo-portal-modal.component.html',
  styleUrls: ['./demo-portal-modal.component.scss']
})
export class DemoPortalModalComponent extends ComponentPortal<DemoPortalModalComponent> implements OnInit {
  @Input() inputTest: any;

  constructor() {
    super(DemoPortalModalComponent);
  }

  ngOnInit() {
    console.log('DemoPortalModalComponent ngOnInit', this.inputTest);
  }

}
