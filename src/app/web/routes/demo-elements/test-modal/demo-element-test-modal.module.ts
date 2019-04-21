import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoElementTestModalComponent } from './demo-element-test-modal.component';

@NgModule({
  imports:         [
    CommonModule
  ],
  declarations:    [DemoElementTestModalComponent],
  entryComponents: [DemoElementTestModalComponent],
  exports:         [DemoElementTestModalComponent]
})
export class DemoElementTestModalModule {
}
