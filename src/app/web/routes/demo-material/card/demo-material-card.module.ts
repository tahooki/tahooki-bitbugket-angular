import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialCardComponent } from './demo-material-card.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports:      [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [DemoMaterialCardComponent],
  exports:      [DemoMaterialCardComponent]
})
export class DemoMaterialCardModule {
}
