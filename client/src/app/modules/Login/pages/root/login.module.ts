import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HelpersModule } from 'src/app/shared/helpers/helpers.module'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './Login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HelpersModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
