import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoLottieComponent } from 'app/web/routes/demo-lottie/demo-lottie.component';

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: 'demo/lottie',
        component: DemoLottieComponent
      }
    ])
  ]
})
export class DemoLottieRoutingModule {
}
