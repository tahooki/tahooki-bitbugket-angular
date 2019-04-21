import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityDropdownComponent } from './accessibility-dropdown.component';

describe('AccessibilityDropdownComponent', () => {
  let component: AccessibilityDropdownComponent;
  let fixture: ComponentFixture<AccessibilityDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibilityDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
