import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPortalModalComponent } from './demo-portal-modal.component';

describe('DemoPortalModalComponent', () => {
  let component: DemoPortalModalComponent;
  let fixture: ComponentFixture<DemoPortalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPortalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPortalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
