import { TestBed } from '@angular/core/testing';

import { FpabilService } from './fpabil.service';

describe('FpabilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FpabilService = TestBed.get(FpabilService);
    expect(service).toBeTruthy();
  });
});
