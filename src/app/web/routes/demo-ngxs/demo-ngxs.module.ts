import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgxsComponent } from './demo-ngxs.component';
import { DemoNgxsRoutingModule } from 'app/web/routes/demo-ngxs/demo-ngxs-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { DemoNgxsCreateComponent } from './demo-ngxs-create/demo-ngxs-create.component';
import { DemoNgxsReadComponent } from './demo-ngxs-read/demo-ngxs-read.component';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';

@NgModule({
  imports: [
    CommonModule,
    DemoNgxsRoutingModule,

    NgxsModule.forRoot([
      TutorialState
    ]),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  declarations: [DemoNgxsComponent, DemoNgxsCreateComponent, DemoNgxsReadComponent]
})
export class DemoNgxsModule { }
