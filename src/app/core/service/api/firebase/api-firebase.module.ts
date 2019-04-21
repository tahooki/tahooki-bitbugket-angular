import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiFirebaseUserService } from 'app/core/service/api/firebase/user/api-firebase-user.service';
import { ApiFirebaseTestService } from 'app/core/service/api/firebase/test/api-firebase-test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {provide: 'UserApi', useClass: ApiFirebaseUserService},
    {provide: 'TestApi', useClass: ApiFirebaseTestService}, // 같은 명칭인경우 마지막에 선언된것이 추출되어 나온다.
  ]
})
export class ApiFirebaseModule { }
