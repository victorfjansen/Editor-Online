import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/pages/root/home.module";
import { LoginModule } from "./modules/Login/pages/root/login.module";
import { HelpersModule } from "./shared/helpers/helpers.module";
import { TemplateModule } from "./shared/template/template.module";

import { APP_BASE_HREF } from "@angular/common";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        TemplateModule,
        HelpersModule,
        HomeModule,
        LoginModule,
        HttpClientModule,
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: "./modules",
        },
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
