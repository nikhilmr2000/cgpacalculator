import { TestBed } from '@angular/core/testing';

import { CgpaService } from './cgpa.service';

describe('CgpaService', () => {
  let service: CgpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
