import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMaterialAutocompleteComponent } from './demo-material-autocomplete.component';

describe('DemoMaterialAutocompleteComponent', () => {
  let component: DemoMaterialAutocompleteComponent;
  let fixture: ComponentFixture<DemoMaterialAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMaterialAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMaterialAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
