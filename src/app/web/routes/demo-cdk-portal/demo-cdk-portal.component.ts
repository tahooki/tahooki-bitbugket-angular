import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { DemoPortalModalComponent } from 'app/web/routes/demo-cdk-portal/demo-portal-modal/demo-portal-modal.component';

@Component({
  selector: 'app-demo-cdk-portal',
  templateUrl: './demo-cdk-portal.component.html',
  styleUrls: ['./demo-cdk-portal.component.scss']
})
export class DemoCdkPortalComponent implements OnInit {
  @ViewChild('portalOutlet') portalOutlet;
  userSettingsPortal: any;

  constructor() { }

  ngOnInit() {
    this.userSettingsPortal = new ComponentPortal(DemoPortalModalComponent);
  }

}
