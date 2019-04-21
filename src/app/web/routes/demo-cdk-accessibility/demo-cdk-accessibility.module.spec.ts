import { DemoCdkAccessibilityModule } from './demo-cdk-accessibility.module';

describe('DemoCdkAccessibilityModule', () => {
  let demoCdkAccessibilityModule: DemoCdkAccessibilityModule;

  beforeEach(() => {
    demoCdkAccessibilityModule = new DemoCdkAccessibilityModule();
  });

  it('should create an instance', () => {
    expect(demoCdkAccessibilityModule).toBeTruthy();
  });
});
