import { ApiFirebaseModule } from './api-firebase.module';

describe('ApiFirebaseModule', () => {
  let apiFirebaseModule: ApiFirebaseModule;

  beforeEach(() => {
    apiFirebaseModule = new ApiFirebaseModule();
  });

  it('should create an instance', () => {
    expect(apiFirebaseModule).toBeTruthy();
  });
});
