import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoMaterialComponent } from 'app/web/routes/demo-material/demo-material.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/material',
        component: DemoMaterialComponent
      }
    ])
  ]
})
export class DemoMaterialRoutingModule {
}
