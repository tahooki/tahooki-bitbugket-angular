import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { WebModule } from './web/web.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './app-material.module';
import { environment } from 'environments/environment';
import { ApiModule } from 'app/core/service/api/api.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    CommonModule,
    RouterModule,
    NgtUniversalModule,

    AngularFireModule.initializeApp(environment.firebase),

    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModules,
    WebModule,
    ApiModule
  ],
  providers:    [],
  schemas:      [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
