import { DemoAnimationModule } from './demo-animation.module';

describe('DemoAnimationModule', () => {
  let demoAnimationModule: DemoAnimationModule;

  beforeEach(() => {
    demoAnimationModule = new DemoAnimationModule();
  });

  it('should create an instance', () => {
    expect(demoAnimationModule).toBeTruthy();
  });
});
