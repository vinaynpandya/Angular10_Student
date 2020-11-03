import { TestBed } from '@angular/core/testing';

import { GeneralesService } from './generales.service';

describe('GeneralesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralesService = TestBed.get(GeneralesService);
    expect(service).toBeTruthy();
  });
});
