import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiFirebaseModule } from 'app/core/service/api/firebase/api-firebase.module';

@NgModule({
  imports:      [
    CommonModule,
    ApiFirebaseModule
  ],
  declarations: []
})
export class ApiModule {
}
