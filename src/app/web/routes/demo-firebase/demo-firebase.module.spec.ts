import { DemoFirebaseModule } from './demo-firebase.module';

describe('DemoFirebaseModule', () => {
  let demoFirebaseModule: DemoFirebaseModule;

  beforeEach(() => {
    demoFirebaseModule = new DemoFirebaseModule();
  });

  it('should create an instance', () => {
    expect(demoFirebaseModule).toBeTruthy();
  });
});
