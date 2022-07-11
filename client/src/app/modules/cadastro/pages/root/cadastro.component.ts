import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { catchError, map } from 'rxjs'
import {
  storeInLocalStorage,
  User,
  validateFields,
  validFields,
} from 'src/app/shared'

import { CadastroService } from '../../services/cadastro.service'

@Component({
  selector: 'app-root',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup
  invalidFields: validFields[]
  generalErrorMessage: string
  userData: any

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cadastroService: CadastroService,
    private readonly route: ActivatedRoute
  ) {
    this.formCadastro = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.email,
          Validators.required,
          Validators.minLength(3),
        ]),
      ],
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

    this.invalidFields = []
    this.generalErrorMessage = ''
    this.userData = this.route.snapshot.data['userData']
  }

  getInvalidField(name: string) {
    const foundInvalidField = this.invalidFields.filter(
      item => item.name === name
    )
    return foundInvalidField
      ? this.invalidFields.includes(foundInvalidField[0])
      : false
  }

  handleSubmit() {
    const allFieldsValid: validFields[] | Boolean = validateFields(
      this.formCadastro,
      ['email', 'password', 'username']
    )
    if (allFieldsValid === true) {
      this.invalidFields = []
      this.generalErrorMessage = ''
      this.cadastroService
        .postUser(this.formCadastro.value)
        .pipe(
          map(obj => obj),
          catchError(error => {
            throw new Error(error.error.message)
          })
        )
        .subscribe({
          next: data => {
            storeInLocalStorage('_id', data._id)
          },
          error: data => (this.generalErrorMessage = data),
        })
    } else this.invalidFields = (<validFields[]>allFieldsValid).map(obj => obj)
  }

  ngOnInit(): void {
    console.log(this.userData)
  }
}
