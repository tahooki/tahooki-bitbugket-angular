import { TestBed } from '@angular/core/testing';

import { ApiFirebaseUserService } from './api-firebase-user.service';

describe('ApiFirebaseUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFirebaseUserService = TestBed.get(ApiFirebaseUserService);
    expect(service).toBeTruthy();
  });
});
