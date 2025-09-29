import { TestBed } from '@angular/core/testing';

import { BankingServices } from './banking-services';

describe('BankingServices', () => {
  let service: BankingServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
