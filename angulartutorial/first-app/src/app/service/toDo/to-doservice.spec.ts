import { TestBed } from '@angular/core/testing';

import { ToDoservice } from './to-doservice';

describe('ToDoservice', () => {
  let service: ToDoservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
