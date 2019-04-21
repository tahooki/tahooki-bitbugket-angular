import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoElementsComponent } from 'app/web/routes/demo-elements/demo-elements.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path:      'demo/elements',
        component: DemoElementsComponent
      }
    ])
  ]
})
export class DemoElementsRoutingModule {
}
