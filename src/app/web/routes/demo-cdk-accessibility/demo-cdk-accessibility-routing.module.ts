import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoCdkAccessibilityComponent } from 'app/web/routes/demo-cdk-accessibility/demo-cdk-accessibility.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path:      'demo/cdk/accessibility',
        component: DemoCdkAccessibilityComponent
      }
    ])
  ]
})
export class DemoCdkAccessibilityRoutingModule {
}
