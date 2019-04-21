import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityDropdownComponent } from './accessibility-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccessibilityDropdownComponent],
  exports: [AccessibilityDropdownComponent]
})
export class AccessibilityDropdownModule { }
