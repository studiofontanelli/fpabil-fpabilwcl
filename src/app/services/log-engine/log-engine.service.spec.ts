import { TestBed } from '@angular/core/testing';

import { LogEngineService } from './log-engine.service';

describe('LogEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogEngineService = TestBed.get(LogEngineService);
    expect(service).toBeTruthy();
  });
});
