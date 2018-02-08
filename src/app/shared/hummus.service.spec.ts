import { TestBed, inject } from '@angular/core/testing';

import { HummusService } from './hummus.service';

describe('HummusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HummusService]
    });
  });

  it('should be created', inject([HummusService], (service: HummusService) => {
    expect(service).toBeTruthy();
  }));
});
