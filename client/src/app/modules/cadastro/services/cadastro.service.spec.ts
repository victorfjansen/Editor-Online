import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { CadastroService } from "./cadastro.service";

describe("CadastroService", () => {
  let service: CadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CadastroService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
