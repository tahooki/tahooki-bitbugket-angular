import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgxsCreateComponent } from './demo-ngxs-create.component';

describe('DemoNgxsCreateComponent', () => {
  let component: DemoNgxsCreateComponent;
  let fixture: ComponentFixture<DemoNgxsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgxsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgxsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
