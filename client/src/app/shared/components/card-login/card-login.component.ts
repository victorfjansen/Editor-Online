import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { User } from '../../models'

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
  @Input() userData: User
  @Output() accountState: EventEmitter<boolean> = new EventEmitter<boolean>()

  state: boolean

  constructor() {
    this.userData = {
      _id: '354',
      email: 'teste@gmail.com',
      password: 'janselino',
      username: 'VictorJansen',
    }
    this.state = true
  }

  switchState() {
    this.accountState.emit(!this.state)
  }

  ngOnInit(): void {}
}
