import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { map, Observable } from 'rxjs'

import { User } from '../models'
import { BaseServiceService } from '../services'
import { getItemLocalStorage } from '../utils'

@Injectable({
  providedIn: 'root',
})
export class UserAlreadyAuthenticatedResolve implements Resolve<User> {
  _id: string | null
  constructor(private baseService: BaseServiceService, private router: Router) {
    this._id = ''
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | any {
    this._id = getItemLocalStorage('_id')
    if (this._id?.length! > 1) {
      return this.baseService.getUserById(this._id!).pipe(
        map(result => {
          if (result) return result
          else {
            return true
          }
        })
      )
    }
    return null
  }
}
