import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimation001Component } from './demo-animation001.component';

describe('DemoAnimation001Component', () => {
  let component: DemoAnimation001Component;
  let fixture: ComponentFixture<DemoAnimation001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimation001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimation001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
