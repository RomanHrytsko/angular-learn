import { TestBed } from '@angular/core/testing';

import { UsersResolveService } from './users-resolve.service';

describe('UsersResolveService', () => {
  let service: UsersResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
