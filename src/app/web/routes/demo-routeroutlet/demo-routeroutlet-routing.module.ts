import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoRouteroutletComponent } from 'app/web/routes/demo-routeroutlet/demo-routeroutlet.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/routeroutlet',
        component: DemoRouteroutletComponent
      }
    ])
  ]
})
export class DemoRouteroutletRoutingModule {
}
