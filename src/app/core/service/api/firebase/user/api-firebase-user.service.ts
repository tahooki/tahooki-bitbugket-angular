import { Injectable } from '@angular/core';
import { TestApiService } from 'app/core/service/api/model/test/test-api-service';

@Injectable()
export class ApiFirebaseUserService implements TestApiService {

  constructor() { }

  test() {
    console.log('asdkljasdlkjs');
  }
}
