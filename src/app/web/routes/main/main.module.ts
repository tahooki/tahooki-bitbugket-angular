import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModules } from '../../../app-material.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports:      [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    AppMaterialModules,
    MatButtonModule,
  ],
  declarations: [MainComponent]
})
export class MainModule {
}
