import { DemoMaterialDatepickerModule } from './demo-material-datepicker.module';

describe('DemoMaterialDatepickerModule', () => {
  let demoMaterialDatepickerModule: DemoMaterialDatepickerModule;

  beforeEach(() => {
    demoMaterialDatepickerModule = new DemoMaterialDatepickerModule();
  });

  it('should create an instance', () => {
    expect(demoMaterialDatepickerModule).toBeTruthy();
  });
});
