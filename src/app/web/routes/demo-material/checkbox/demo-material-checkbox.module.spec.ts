import { DemoMaterialCheckboxModule } from './demo-material-checkbox.module';

describe('DemoMaterialCheckboxModule', () => {
  let demoMaterialCheckboxModule: DemoMaterialCheckboxModule;

  beforeEach(() => {
    demoMaterialCheckboxModule = new DemoMaterialCheckboxModule();
  });

  it('should create an instance', () => {
    expect(demoMaterialCheckboxModule).toBeTruthy();
  });
});
