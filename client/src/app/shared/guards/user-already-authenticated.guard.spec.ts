import { TestBed } from '@angular/core/testing';

import { UserAlreadyAuthenticatedGuard } from './user-already-authenticated.guard';

describe('UserAlreadyAuthenticatedGuard', () => {
  let guard: UserAlreadyAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAlreadyAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
