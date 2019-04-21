import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  declarations: [LayoutHeaderComponent],
  exports:      [LayoutHeaderComponent]
})
export class LayoutHeaderModule {
}
