import { TestBed, inject } from '@angular/core/testing';

import { CrmethodService } from './crmethod.service';

describe('CrmethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrmethodService]
    });
  });

  it('should be created', inject([CrmethodService], (service: CrmethodService) => {
    expect(service).toBeTruthy();
  }));
});
