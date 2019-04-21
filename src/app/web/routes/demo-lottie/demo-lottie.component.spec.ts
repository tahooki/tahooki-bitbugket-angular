import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLottieComponent } from './demo-lottie.component';

describe('DemoLottieComponent', () => {
  let component: DemoLottieComponent;
  let fixture: ComponentFixture<DemoLottieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLottieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
