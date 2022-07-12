import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TemplateModule } from "../../template/template.module";

import { CardLoginComponent } from "./card-login.component";

describe("CardLoginComponent", () => {
  let component: CardLoginComponent;
  let fixture: ComponentFixture<CardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardLoginComponent],
      imports: [TemplateModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
