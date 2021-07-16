import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsMaterialAutocompleteComponent } from './bs-material-autocomplete.component';

describe('BsMaterialAutocompleteComponent', () => {
  let component: BsMaterialAutocompleteComponent;
  let fixture: ComponentFixture<BsMaterialAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsMaterialAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsMaterialAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
