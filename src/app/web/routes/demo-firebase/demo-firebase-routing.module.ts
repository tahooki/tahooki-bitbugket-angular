import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoFirebaseComponent } from 'app/web/routes/demo-firebase/demo-firebase.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/firebase',
        component: DemoFirebaseComponent
      }
    ])
  ]
})
export class DemoFirebaseRoutingModule {
}
