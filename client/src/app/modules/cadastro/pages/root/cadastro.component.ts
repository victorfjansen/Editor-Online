import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { validateFields } from 'src/app/shared'

import { CadastroService } from '../../services/cadastro.service'

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup
  errorMessage: string

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cadastroService: CadastroService
  ) {
    this.formCadastro = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.pattern(
            /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
          ),
          Validators.required,
        ]),
      ],
    })

    this.errorMessage = ''
  }

  handleSubmit() {
    const allFieldsValid = validateFields(this.formCadastro, [
      'email',
      'password',
      'username',
    ])
    if (allFieldsValid === true)
      this.cadastroService
        .postUser(this.formCadastro.value)
        .subscribe(data => console.log(data))
    else {
      this.errorMessage = `Verifique seus dados: campos inválidos ${allFieldsValid[0].name}`
    }
  }

  ngOnInit(): void {}
}
