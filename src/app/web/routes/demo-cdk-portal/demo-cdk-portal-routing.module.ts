import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoCdkPortalComponent } from 'app/web/routes/demo-cdk-portal/demo-cdk-portal.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path:      'demo/cdk/portal',
        component: DemoCdkPortalComponent
      }
    ])
  ]
})
export class DemoCdkPortalRoutingModule {
}
