import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialCardComponent } from './demo-material-card.component';

describe('DemoMaterialCardComponent', () => {
  let component: DemoMaterialCardComponent;
  let fixture: ComponentFixture<DemoMaterialCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMaterialCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMaterialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
