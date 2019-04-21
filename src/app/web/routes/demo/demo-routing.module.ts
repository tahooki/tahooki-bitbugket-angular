import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponent } from 'app/web/routes/demo/demo.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo',
        component: DemoComponent
      }
    ])
  ]
})
export class DemoRoutingModule {
}
