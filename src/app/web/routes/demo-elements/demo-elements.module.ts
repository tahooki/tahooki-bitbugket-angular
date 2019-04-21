import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoElementsComponent } from './demo-elements.component';
import { DemoElementsRoutingModule } from 'app/web/routes/demo-elements/demo-elements-routing.module';
import { DemoElementTestModalModule } from 'app/web/routes/demo-elements/test-modal/demo-element-test-modal.module';

@NgModule({
  imports: [
    CommonModule,
    DemoElementsRoutingModule,

    DemoElementTestModalModule
  ],
  declarations: [DemoElementsComponent]
})
export class DemoElementsModule { }
