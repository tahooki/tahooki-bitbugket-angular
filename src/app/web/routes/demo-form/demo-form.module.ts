import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form.component';
import { DemoFormRoutingModule } from 'app/web/routes/demo-form/demo-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoFormRoutingModule
  ],
  declarations: [DemoFormComponent]
})
export class DemoFormModule { }
