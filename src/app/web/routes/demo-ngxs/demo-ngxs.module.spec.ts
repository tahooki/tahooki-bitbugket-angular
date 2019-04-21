import { DemoNgxsModule } from './demo-ngxs.module';

describe('DemoNgxsModule', () => {
  let demoNgxsModule: DemoNgxsModule;

  beforeEach(() => {
    demoNgxsModule = new DemoNgxsModule();
  });

  it('should create an instance', () => {
    expect(demoNgxsModule).toBeTruthy();
  });
});
