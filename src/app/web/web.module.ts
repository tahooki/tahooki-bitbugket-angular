import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './routes/main/main.module';
import { DemoModule } from './routes/demo/demo.module';
import { CommunityModule } from './routes/community/community.module';
import { LayoutHeaderModule } from 'app/web/layout/header/layout-header.module';
import { LayoutModalModule } from 'app/web/layout/modal/layout-modal.module';
import { DemoLottieModule } from 'app/web/routes/demo-lottie/demo-lottie.module';
import { DemoAnimationModule } from 'app/web/routes/demo-animation/demo-animation.module';
import { DemoNgxsModule } from 'app/web/routes/demo-ngxs/demo-ngxs.module';
import { DemoCdkPortalModule } from 'app/web/routes/demo-cdk-portal/demo-cdk-portal.module';
import { DemoCdkAccessibilityModule } from 'app/web/routes/demo-cdk-accessibility/demo-cdk-accessibility.module';

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    DemoModule,
    CommunityModule,

    DemoLottieModule,
    DemoAnimationModule,
    DemoNgxsModule,
    DemoCdkPortalModule,
    DemoCdkAccessibilityModule,

    LayoutHeaderModule,
    LayoutModalModule
  ],
  exports: [
    LayoutHeaderModule,
    LayoutModalModule
  ]
})
export class WebModule {
}
