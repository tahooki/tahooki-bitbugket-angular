import { NgModule, ModuleWithProviders } from '@angular/core';

import { LocalStorageService } from './local/local-storage.service';
import { SessionStorageService } from './session/session-storage.service';
import { StorageService } from './storage.service';

@NgModule({
  providers: [
    StorageService,
    LocalStorageService,
    SessionStorageService
  ]
})
export class StorageModule {
}
