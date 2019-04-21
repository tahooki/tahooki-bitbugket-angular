import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoNgxsComponent } from 'app/web/routes/demo-ngxs/demo-ngxs.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/ngxs',
        component: DemoNgxsComponent
      }
    ])
  ]
})
export class DemoNgxsRoutingModule {
}
