import { TestBed } from '@angular/core/testing';

import { IAuthServiceService } from './i-auth-service.service';

describe('IAuthServiceService', () => {
  let service: IAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
