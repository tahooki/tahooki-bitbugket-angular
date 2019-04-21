import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRouteroutletComponent } from './demo-routeroutlet.component';
import { DemoRouteroutletRoutingModule } from 'app/web/routes/demo-routeroutlet/demo-routeroutlet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoRouteroutletRoutingModule
  ],
  declarations: [DemoRouteroutletComponent]
})
export class DemoRouteroutletModule { }
