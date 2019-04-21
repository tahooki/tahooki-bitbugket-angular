import { DemoElementsModule } from './demo-elements.module';

describe('DemoElementsModule', () => {
  let demoElementModule: DemoElementsModule;

  beforeEach(() => {
    demoElementModule = new DemoElementsModule();
  });

  it('should create an instance', () => {
    expect(demoElementModule).toBeTruthy();
  });
});
