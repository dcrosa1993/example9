import { TestBed } from '@angular/core/testing';

import { PetitionServiceService } from './petition-service.service';

describe('PetitionServiceService', () => {
  let service: PetitionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetitionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
