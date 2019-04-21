import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialComponent } from './demo-material.component';
import { DemoMaterialRoutingModule } from 'app/web/routes/demo-material/demo-material-routing.module';
import { DemoMaterialAutocompleteModule } from 'app/web/routes/demo-material/autocomplete/demo-material-autocomplete.module';
import { MatTabsModule } from '@angular/material';
import { DemoMaterialCheckboxModule } from 'app/web/routes/demo-material/checkbox/demo-material-checkbox.module';
import { DemoMaterialDatepickerModule } from 'app/web/routes/demo-material/datepicker/demo-material-datepicker.module';
import { DemoMaterialCardModule } from 'app/web/routes/demo-material/card/demo-material-card.module';

@NgModule({
  imports:      [
    CommonModule,
    DemoMaterialRoutingModule,

    MatTabsModule,

    DemoMaterialAutocompleteModule,
    DemoMaterialCheckboxModule,
    DemoMaterialDatepickerModule,
    DemoMaterialCardModule
  ],
  declarations: [DemoMaterialComponent]
})
export class DemoMaterialModule {
}
