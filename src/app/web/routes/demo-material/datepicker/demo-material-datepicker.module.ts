import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialDatepickerComponent } from './demo-material-datepicker.component';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    CommonModule,
    ReactiveFormsModule,

    MatNativeDateModule,

    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ],
  declarations: [DemoMaterialDatepickerComponent],
  exports:      [DemoMaterialDatepickerComponent]
})
export class DemoMaterialDatepickerModule {
}
