import { TestBed } from '@angular/core/testing';

import { BooksdescriptionserviceService } from './booksdescriptionservice.service';

describe('BooksdescriptionserviceService', () => {
  let service: BooksdescriptionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksdescriptionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
