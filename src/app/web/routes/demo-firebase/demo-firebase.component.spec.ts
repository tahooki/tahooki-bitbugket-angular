import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFirebaseComponent } from './demo-firebase.component';

describe('DemoFirebaseComponent', () => {
  let component: DemoFirebaseComponent;
  let fixture: ComponentFixture<DemoFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
