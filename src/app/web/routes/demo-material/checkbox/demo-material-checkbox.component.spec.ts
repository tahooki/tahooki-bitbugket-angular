import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialCheckboxComponent } from './demo-material-checkbox.component';

describe('DemoMaterialCheckboxComponent', () => {
  let component: DemoMaterialCheckboxComponent;
  let fixture: ComponentFixture<DemoMaterialCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMaterialCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMaterialCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
