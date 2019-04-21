import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from 'app/web/routes/demo/demo-routing.module';
import { DemoComponent } from 'app/web/routes/demo/demo.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports:         [
    CommonModule,
    DemoRoutingModule,

    RouterModule,
    MatButtonModule
  ],
  declarations:    [
    DemoComponent
  ],
  entryComponents: [],
  exports:         [DemoComponent]
})
export class DemoModule {
}
