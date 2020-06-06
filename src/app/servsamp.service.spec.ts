import { TestBed } from '@angular/core/testing';

import { ServsampService } from './servsamp.service';

describe('ServsampService', () => {
  let service: ServsampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServsampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
