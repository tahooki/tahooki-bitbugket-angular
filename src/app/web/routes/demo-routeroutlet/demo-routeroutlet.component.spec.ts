import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteroutletComponent } from './demo-router-outlet.component';

describe('DemoRouterOutletComponent', () => {
  let component: DemoRouteroutletComponent;
  let fixture: ComponentFixture<DemoRouteroutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouteroutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouteroutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
