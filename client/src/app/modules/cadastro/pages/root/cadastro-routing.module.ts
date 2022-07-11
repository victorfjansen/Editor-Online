import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserAlreadyAuthenticatedResolve } from 'src/app/shared/guards/user-already-authenticated.guard'

import { CadastroComponent } from './cadastro.component'

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
    resolve: {
      userData: UserAlreadyAuthenticatedResolve,
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRoutingModule {}
