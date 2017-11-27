import { TestBed, inject } from '@angular/core/testing';

import { CasinoSerService } from './casino-ser.service';

describe('CasinoSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasinoSerService]
    });
  });

  it('should be created', inject([CasinoSerService], (service: CasinoSerService) => {
    expect(service).toBeTruthy();
  }));
});
