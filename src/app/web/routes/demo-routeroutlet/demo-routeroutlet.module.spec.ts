import { DemoRouteroutletModule } from './demo-routeroutlet.module';

describe('DemoRouterOutletModule', () => {
  let demoRouterOutletModule: DemoRouteroutletModule;

  beforeEach(() => {
    demoRouterOutletModule = new DemoRouteroutletModule();
  });

  it('should create an instance', () => {
    expect(demoRouterOutletModule).toBeTruthy();
  });
});
