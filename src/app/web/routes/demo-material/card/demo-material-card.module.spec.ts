import { DemoMaterialCardModule } from './demo-material-card.module';

describe('DemoMaterialCardModule', () => {
  let demoMaterialCardModule: DemoMaterialCardModule;

  beforeEach(() => {
    demoMaterialCardModule = new DemoMaterialCardModule();
  });

  it('should create an instance', () => {
    expect(demoMaterialCardModule).toBeTruthy();
  });
});
