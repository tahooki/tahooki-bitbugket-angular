import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoLottieComponent } from './demo-lottie.component';
import { DemoLottieRoutingModule } from 'app/web/routes/demo-lottie/demo-lottie-routing.module';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  imports: [
    CommonModule,
    DemoLottieRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  declarations: [DemoLottieComponent]
})
export class DemoLottieModule { }
