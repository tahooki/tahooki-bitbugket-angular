import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoFormComponent } from 'app/web/routes/demo-form/demo-form.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/form',
        component: DemoFormComponent
      }
    ])
  ]
})
export class DemoFormRoutingModule {
}
