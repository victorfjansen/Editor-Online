import { Component, Input, OnInit } from '@angular/core'
import { User } from '../../models'

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
  standalone: true,
})
export class CardLoginComponent implements OnInit {
  @Input() userData: User
  constructor() {
    this.userData = {
      _id: '354',
      email: 'teste@gmail.com',
      password: 'janselino',
      username: 'VictorJansen',
    }
  }

  ngOnInit(): void {}
}
