import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import * as validateModule from "src/app/shared";

import { CadastroComponent } from "./cadastro.component";

describe("RootComponent", () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should reset invalid fieds and general error message when handleumbit() was called and fields was valid", () => {
    jest.doMock("validateModule", () => {
      return {
        default: {
          validateFields: () => true,
        },
      };
    });
    const mockedValuesForFields: validateModule.validFields[] = [
      {
        name: "Qualquer um",
        valid: true,
      },
    ];
    const mockedStringErrorMessage = "generic error";
    component.invalidFields = mockedValuesForFields;
    component.generalErrorMessage = mockedStringErrorMessage;

    component.handleSubmit();

    expect(component.invalidFields).toEqual([]);
    expect(component.generalErrorMessage).toEqual("");
  });
});
