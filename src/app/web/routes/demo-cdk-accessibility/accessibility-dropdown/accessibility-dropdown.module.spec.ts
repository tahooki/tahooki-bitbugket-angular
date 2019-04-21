import { AccessibilityDropdownModule } from './accessibility-dropdown.module';

describe('AccessibilityDropdownModule', () => {
  let accessibilityDropdownModule: AccessibilityDropdownModule;

  beforeEach(() => {
    accessibilityDropdownModule = new AccessibilityDropdownModule();
  });

  it('should create an instance', () => {
    expect(accessibilityDropdownModule).toBeTruthy();
  });
});
