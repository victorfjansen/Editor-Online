import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from './modules/home/pages/root/home.module'
import { LoginModule } from './modules/Login/pages/root/login.module'
import { HelpersModule } from './shared/helpers/helpers.module'
import { TemplateModule } from './shared/template/template.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    HelpersModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
