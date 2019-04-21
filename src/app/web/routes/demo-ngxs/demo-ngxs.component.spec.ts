import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxsComponent } from './demo-ngxs.component';

describe('DemoNgxsComponent', () => {
  let component: DemoNgxsComponent;
  let fixture: ComponentFixture<DemoNgxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
