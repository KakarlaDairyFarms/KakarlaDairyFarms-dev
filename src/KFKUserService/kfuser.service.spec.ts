import { TestBed } from '@angular/core/testing';

import { KFUserService } from './kfuser.service';

describe('KFUserService', () => {
  let service: KFUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KFUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
