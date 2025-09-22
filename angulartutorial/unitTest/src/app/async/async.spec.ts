import { TestBed } from '@angular/core/testing';

import { Async } from './async';

describe('Async', () => {
  let service: Async;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Async);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct data asynchronously when getData() is called', async () => {
    const data = await service.getData();
    expect(data).toEqual([
      { "id": 1, "first_name": "Tiler", "email": "thobben0@hp.com" },
      { "id": 2, "first_name": "Sebastien", "email": "snutter1@shinystat.com" },
      { "id": 3, "first_name": "Pandora", "email": "pdunbobin2@google.co.jp" },
      { "id": 4, "first_name": "Olenka", "email": "obowater3@360.cn" },
      { "id": 5, "first_name": "Roxine", "email": "rseeler4@marketwatch.com" },
      { "id": 6, "first_name": "Fulvia", "email": "facomb5@reference.com" },
      { "id": 7, "first_name": "Devin", "email": "dmalham6@skyrock.com" },
      { "id": 8, "first_name": "Winslow", "email": "whedman7@marketwatch.com" },
      { "id": 9, "first_name": "Elsi", "email": "eligertwood8@tiny.cc" }
    ]);
  });

  it('should return data after a delay (simulate async)', async () => {
    const startTime = Date.now();
    await service.getData();
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(1000); // Ensure that the function waited at least 1 second
  });

});
