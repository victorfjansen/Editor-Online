import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HelpersModule } from '../helpers/helpers.module'

import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, HelpersModule, RouterModule],
})
export class TemplateModule {}
