import { TestBed } from '@angular/core/testing';

import { SproveedorService } from './sproveedor.service';

describe('SproveedorService', () => {
  let service: SproveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
