import { TestBed } from '@angular/core/testing';

import { RevisaoService } from './revisao.service';

describe('RevisaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevisaoService = TestBed.get(RevisaoService);
    expect(service).toBeTruthy();
  });
});
