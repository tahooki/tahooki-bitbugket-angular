import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatAutocompleteModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatCardModule,
    CdkTableModule,
    MatButtonModule
  ]
})
export class AppMaterialModules {
}
