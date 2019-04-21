import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAnimation001Component } from './demo-animation001.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports:      [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [DemoAnimation001Component],
  exports:      [DemoAnimation001Component]
})
export class DemoAnimation001Module {
}
