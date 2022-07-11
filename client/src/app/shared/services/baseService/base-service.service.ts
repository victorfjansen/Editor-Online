import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../../models'
import { getUrl } from '../../utils'
import { environment } from '../../variables'

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  constructor(private readonly http: HttpClient) {}

  getUserById(_id: string): Observable<User> {
    return this.http.get<User>(getUrl('auth/userById'), {
      headers: {
        _id,
      },
    })
  }
}
