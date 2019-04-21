import { DemoElementTestModalModule } from './demo-element-test-modal.module';

describe('DemoElementTestModalModule', () => {
  let demoElementTestModalModule: DemoElementTestModalModule;

  beforeEach(() => {
    demoElementTestModalModule = new DemoElementTestModalModule();
  });

  it('should create an instance', () => {
    expect(demoElementTestModalModule).toBeTruthy();
  });
});
