import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCdkAccessibilityComponent } from './demo-cdk-accessibility.component';

describe('DemoCdkAccessibilityComponent', () => {
  let component: DemoCdkAccessibilityComponent;
  let fixture: ComponentFixture<DemoCdkAccessibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCdkAccessibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdkAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
