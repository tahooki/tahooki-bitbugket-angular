import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoAnimationComponent } from 'app/web/routes/demo-animation/demo-animation.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/animation',
        component: DemoAnimationComponent
      }
    ])
  ]
})
export class DemoAnimationRoutingModule {
}
