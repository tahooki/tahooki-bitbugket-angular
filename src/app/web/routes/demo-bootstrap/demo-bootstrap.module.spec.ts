import { DemoBootstrapModule } from './demo-bootstrap.module';

describe('DemoBootstrapModule', () => {
  let demoBootstrapModule: DemoBootstrapModule;

  beforeEach(() => {
    demoBootstrapModule = new DemoBootstrapModule();
  });

  it('should create an instance', () => {
    expect(demoBootstrapModule).toBeTruthy();
  });
});
