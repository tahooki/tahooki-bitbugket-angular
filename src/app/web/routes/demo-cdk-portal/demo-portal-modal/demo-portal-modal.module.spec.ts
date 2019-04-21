import { DemoPortalModalModule } from './demo-portal-modal.module';

describe('DemoPortalModalModule', () => {
  let demoPortalModalModule: DemoPortalModalModule;

  beforeEach(() => {
    demoPortalModalModule = new DemoPortalModalModule();
  });

  it('should create an instance', () => {
    expect(demoPortalModalModule).toBeTruthy();
  });
});
