import { DemoCdkPortalModule } from './demo-cdk-portal.module';

describe('DemoCdkPortalModule', () => {
  let demoCdkPortalModule: DemoCdkPortalModule;

  beforeEach(() => {
    demoCdkPortalModule = new DemoCdkPortalModule();
  });

  it('should create an instance', () => {
    expect(demoCdkPortalModule).toBeTruthy();
  });
});
