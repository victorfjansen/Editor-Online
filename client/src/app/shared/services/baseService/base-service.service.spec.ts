import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { BaseServiceService } from "./base-service.service";

describe("BaseServiceService", () => {
  let service: BaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BaseServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
