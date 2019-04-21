import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBootstrapComponent } from './demo-bootstrap.component';
import { DemoBootstrapRoutingModule } from 'app/web/routes/demo-bootstrap/demo-bootstrap-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoBootstrapRoutingModule
  ],
  declarations: [DemoBootstrapComponent]
})
export class DemoBootstrapModule { }
