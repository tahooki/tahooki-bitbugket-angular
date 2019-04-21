import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModalComponent } from './layout-modal.component';

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [LayoutModalComponent],
  exports:      [LayoutModalComponent]
})
export class LayoutModalModule {
}
