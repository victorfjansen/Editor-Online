import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRouting } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HelpersModule } from 'src/app/shared/helpers/helpers.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRouting, HelpersModule],
})
export class HomeModule {}
