import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAnimationComponent } from './demo-animation.component';
import { DemoAnimationRoutingModule } from 'app/web/routes/demo-animation/demo-animation-routing.module';
import { DemoAnimation001Module } from 'app/web/routes/demo-animation/demo-animation001/demo-animation001.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoAnimation002Module } from 'app/web/routes/demo-animation/demo-animation002/demo-animation002.module';

@NgModule({
  imports:      [
    CommonModule,
    DemoAnimationRoutingModule,
    DemoAnimation001Module,
    DemoAnimation002Module,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [DemoAnimationComponent]
})
export class DemoAnimationModule {
}
