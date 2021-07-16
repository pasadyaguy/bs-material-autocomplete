import { TestBed } from '@angular/core/testing';

import { BsMaterialAutocompleteService } from './bs-material-autocomplete.service';

describe('BsMaterialAutocompleteService', () => {
  let service: BsMaterialAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsMaterialAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
