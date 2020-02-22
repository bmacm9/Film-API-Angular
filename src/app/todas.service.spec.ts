import { TestBed } from '@angular/core/testing';

import { TodasService } from './todas.service';

describe('TodasService', () => {
  let service: TodasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
