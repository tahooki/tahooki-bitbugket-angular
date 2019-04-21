import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimation002Component } from './demo-animation002.component';

describe('DemoAnimation002Component', () => {
  let component: DemoAnimation002Component;
  let fixture: ComponentFixture<DemoAnimation002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimation002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimation002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
