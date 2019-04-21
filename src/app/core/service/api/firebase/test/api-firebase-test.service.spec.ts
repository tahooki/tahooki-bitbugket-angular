import { TestBed } from '@angular/core/testing';

import { ApiFirebaseTestService } from './api-firebase-test.service';

describe('ApiFirebaseTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFirebaseTestService = TestBed.get(ApiFirebaseTestService);
    expect(service).toBeTruthy();
  });
});
