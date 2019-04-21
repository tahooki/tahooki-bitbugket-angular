import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCdkPortalComponent } from './demo-cdk-portal.component';

describe('DemoCdkPortalComponent', () => {
  let component: DemoCdkPortalComponent;
  let fixture: ComponentFixture<DemoCdkPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCdkPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCdkPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
