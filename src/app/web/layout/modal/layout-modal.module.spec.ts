import { LayoutModalModule } from './layout-modal.module';

describe('LayoutModalModule', () => {
  let layoutModalModule: LayoutModalModule;

  beforeEach(() => {
    layoutModalModule = new LayoutModalModule();
  });

  it('should create an instance', () => {
    expect(layoutModalModule).toBeTruthy();
  });
});
