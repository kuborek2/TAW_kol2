import { TestBed } from '@angular/core/testing';

import { JKDataServiceService } from './jk-data-service.service';

describe('JKDataServiceService', () => {
  let service: JKDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JKDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
