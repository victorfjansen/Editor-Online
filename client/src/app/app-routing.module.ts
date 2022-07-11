import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/pages/root/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/Login/pages/root/login.module').then(
        m => m.LoginModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/pages/root/cadastro.module').then(
        m => m.CadastroModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
