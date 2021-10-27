import { TestBed } from '@angular/core/testing';

import { ScotizacionService } from './scotizacion.service';

describe('ScotizacionService', () => {
  let service: ScotizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScotizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
