import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCdkAccessibilityComponent } from './demo-cdk-accessibility.component';
import { AccessibilityDropdownModule } from 'app/web/routes/demo-cdk-accessibility/accessibility-dropdown/accessibility-dropdown.module';
import { DemoCdkAccessibilityRoutingModule } from 'app/web/routes/demo-cdk-accessibility/demo-cdk-accessibility-routing.module';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    CommonModule,
    AccessibilityDropdownModule,
    DemoCdkAccessibilityRoutingModule,
    A11yModule
  ],
  declarations: [DemoCdkAccessibilityComponent]
})
export class DemoCdkAccessibilityModule { }
