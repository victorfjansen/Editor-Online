import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment, getUrl, User } from 'src/app/shared'

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private baseUrl: string
  constructor(private http: HttpClient) {
    this.baseUrl = getUrl('auth')
  }

  postUser(userData: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, userData)
  }
}
