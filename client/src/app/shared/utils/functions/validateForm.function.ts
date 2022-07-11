import { FormGroup } from '@angular/forms'

import { validFields } from '../../models'

export function validateFields(form: FormGroup, array: string[]): any {
  const validFields: validFields[] = []
  array.forEach(item => {
    validFields.push({ name: item, valid: form.get(item)?.valid })
  })
  if (validFields.every(item => item.valid === true)) return true
  else return validFields.filter(item => item.valid !== true)
}
