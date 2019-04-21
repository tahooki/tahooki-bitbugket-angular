import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFirebaseComponent } from './demo-firebase.component';
import { DemoFirebaseRoutingModule } from 'app/web/routes/demo-firebase/demo-firebase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DemoFirebaseRoutingModule
  ],
  declarations: [DemoFirebaseComponent]
})
export class DemoFirebaseModule { }
