import { DemoMaterialAutocompleteModule } from './demo-material-autocomplete.module';

describe('DemoMaterialAutocompleteModule', () => {
  let demoMaterialAutocompleteModule: DemoMaterialAutocompleteModule;

  beforeEach(() => {
    demoMaterialAutocompleteModule = new DemoMaterialAutocompleteModule();
  });

  it('should create an instance', () => {
    expect(demoMaterialAutocompleteModule).toBeTruthy();
  });
});
