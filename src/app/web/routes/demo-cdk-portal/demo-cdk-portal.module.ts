import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCdkPortalComponent } from './demo-cdk-portal.component';
import { DemoCdkPortalRoutingModule } from 'app/web/routes/demo-cdk-portal/demo-cdk-portal-routing.module';
import { PortalModule } from '@angular/cdk/portal';
import { DemoPortalModalModule } from 'app/web/routes/demo-cdk-portal/demo-portal-modal/demo-portal-modal.module';

@NgModule({
  imports: [
    CommonModule,
    DemoCdkPortalRoutingModule,
    DemoPortalModalModule,
    PortalModule
  ],
  declarations: [DemoCdkPortalComponent]
})
export class DemoCdkPortalModule { }
