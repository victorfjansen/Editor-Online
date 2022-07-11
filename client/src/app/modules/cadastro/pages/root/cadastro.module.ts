import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CadastroService } from '../../services/cadastro.service'

import { CadastroRoutingModule } from './cadastro-routing.module'
import { CadastroComponent } from './cadastro.component'

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CadastroService],
})
export class CadastroModule {}
