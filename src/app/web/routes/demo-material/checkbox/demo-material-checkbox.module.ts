import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialCheckboxComponent } from './demo-material-checkbox.component';
import { MatCardModule, MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,

    MatCheckboxModule,
    MatRadioModule,
    MatCardModule
  ],
  declarations: [DemoMaterialCheckboxComponent],
  exports:      [DemoMaterialCheckboxComponent]
})
export class DemoMaterialCheckboxModule {
}
