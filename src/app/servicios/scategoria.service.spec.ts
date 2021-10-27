import { TestBed } from '@angular/core/testing';

import { ScategoriaService } from './scategoria.service';

describe('ScategoriaService', () => {
  let service: ScategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
