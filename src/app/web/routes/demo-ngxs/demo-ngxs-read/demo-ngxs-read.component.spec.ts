import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxsReadComponent } from './demo-ngxs-read.component';

describe('DemoNgxsReadComponent', () => {
  let component: DemoNgxsReadComponent;
  let fixture: ComponentFixture<DemoNgxsReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgxsReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
