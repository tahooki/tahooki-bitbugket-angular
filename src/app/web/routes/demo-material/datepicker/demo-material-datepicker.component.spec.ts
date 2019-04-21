import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialDatepickerComponent } from './demo-material-datepicker.component';

describe('DemoMaterialDatepickerComponent', () => {
  let component: DemoMaterialDatepickerComponent;
  let fixture: ComponentFixture<DemoMaterialDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMaterialDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMaterialDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
