import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardLoginComponent } from './card-login.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [CardLoginComponent],
  exports: [CardLoginComponent],
  imports: [CommonModule],
})
export class CardLoginModule {}
