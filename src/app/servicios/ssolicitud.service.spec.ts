import { TestBed } from '@angular/core/testing';

import { SsolicitudService } from './ssolicitud.service';

describe('SsolicitudService', () => {
  let service: SsolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
