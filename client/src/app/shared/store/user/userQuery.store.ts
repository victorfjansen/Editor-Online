import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { Observable } from "rxjs";

import { IUserStore, UserStore } from "./userStore.store";

@Injectable({ providedIn: "root" })
export class UserQuery extends Query<IUserStore> {
  constructor(userStore: UserStore) {
    super(userStore);
  }

  getUser(): Observable<IUserStore> {
    return this.select((state) => state);
  }

  getUsername(): Observable<string> {
    return this.select((state) => state.username);
  }

  getEmail(): Observable<string> {
    return this.select((state) => state.email);
  }
}
