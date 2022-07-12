import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { UserAlreadyAuthenticatedResolve } from "./user-already-authenticated.guard";

describe("UserAlreadyAuthenticatedGuard", () => {
  let guard: UserAlreadyAuthenticatedResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    guard = TestBed.inject(UserAlreadyAuthenticatedResolve);
  });

  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
