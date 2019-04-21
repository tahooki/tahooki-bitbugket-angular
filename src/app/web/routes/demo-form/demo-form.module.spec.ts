import { DemoFormModule } from './demo-form.module';

describe('DemoFormModule', () => {
  let demoFormModule: DemoFormModule;

  beforeEach(() => {
    demoFormModule = new DemoFormModule();
  });

  it('should create an instance', () => {
    expect(demoFormModule).toBeTruthy();
  });
});
