
import { RouterModule } from '@angular/router';
import { CommunityComponent } from './community.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'community',
        component: CommunityComponent
      }
    ])
  ]
})
export class CommunityRoutingModule {

}
