import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoElementTestModalComponent } from './demo-element-test-modal.component';

describe('DemoElementTestModalComponent', () => {
  let component: DemoElementTestModalComponent;
  let fixture: ComponentFixture<DemoElementTestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoElementTestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoElementTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
