import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsHmrLifeCycle, NgxsHmrSnapshot } from '@ngxs/hmr-plugin';
import { StateContext } from '@ngxs/store';

@NgModule({
  bootstrap: [AppComponent],

  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),

    AppModule,
  ]
})
export class AppBrowserModule implements NgxsHmrLifeCycle<NgxsHmrSnapshot> {

  public hmrNgxsStoreOnInit(ctx: StateContext<NgxsHmrSnapshot>, snapshot: Partial<NgxsHmrSnapshot>) {
    ctx.patchState(snapshot);
  }
  public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<NgxsHmrSnapshot>): Partial<NgxsHmrSnapshot> {
    return ctx.getState();
  }

}
