import { TestBed } from '@angular/core/testing';

import { UserServiceResolveService } from './user-service-resolve.service';

describe('UserServiceResolveService', () => {
  let service: UserServiceResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
