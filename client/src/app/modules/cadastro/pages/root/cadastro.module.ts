import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CardLoginComponent } from 'src/app/shared/components'
import { UserAlreadyAuthenticatedResolve } from 'src/app/shared/guards/user-already-authenticated.guard'
import { CadastroService } from '../../services/cadastro.service'

import { CadastroRoutingModule } from './cadastro-routing.module'
import { CadastroComponent } from './cadastro.component'

@NgModule({
  declarations: [CadastroComponent],
  exports: [],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardLoginComponent,
  ],
  providers: [CadastroService],
})
export class CadastroModule {}
