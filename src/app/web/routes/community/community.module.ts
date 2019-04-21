import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { AppMaterialModules } from '../../../app-material.module';
import { CommunityRoutingModule } from './community-routing.module';

@NgModule({
  imports:      [
    CommonModule,
    CommunityRoutingModule,
    AppMaterialModules
  ],
  declarations: [
    CommunityComponent
  ]
})
export class CommunityModule {
}
