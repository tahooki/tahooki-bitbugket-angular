import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialAutocompleteComponent } from './demo-material-autocomplete.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  declarations: [DemoMaterialAutocompleteComponent],
  exports:      [DemoMaterialAutocompleteComponent]
})
export class DemoMaterialAutocompleteModule {
}
