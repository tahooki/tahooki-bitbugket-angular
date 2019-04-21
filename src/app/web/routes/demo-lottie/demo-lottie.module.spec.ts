import { DemoLottieModule } from './demo-lottie.module';

describe('DemoLottieModule', () => {
  let demoLottieModule: DemoLottieModule;

  beforeEach(() => {
    demoLottieModule = new DemoLottieModule();
  });

  it('should create an instance', () => {
    expect(demoLottieModule).toBeTruthy();
  });
});
