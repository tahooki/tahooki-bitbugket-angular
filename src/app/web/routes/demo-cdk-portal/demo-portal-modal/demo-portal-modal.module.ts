import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPortalModalComponent } from './demo-portal-modal.component';

@NgModule({
  imports:         [
    CommonModule
  ],
  declarations:    [DemoPortalModalComponent],
  entryComponents: [DemoPortalModalComponent]
})
export class DemoPortalModalModule {
}
