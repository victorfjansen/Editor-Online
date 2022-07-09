import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HelpersModule } from './shared/helpers/helpers.module'
import { TemplateModule } from './shared/template/template.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule, HelpersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
