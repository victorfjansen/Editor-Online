import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CardLoginModule } from 'src/app/shared/components/card-login/card-login.module'

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
    CardLoginModule,
  ],
  providers: [CadastroService],
})
export class CadastroModule {}
