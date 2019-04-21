import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoBootstrapComponent } from 'app/web/routes/demo-bootstrap/demo-bootstrap.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/bootstrap',
        component: DemoBootstrapComponent
      }
    ])
  ]
})
export class DemoBootstrapRoutingModule {
}
