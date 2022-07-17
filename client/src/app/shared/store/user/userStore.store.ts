import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export interface IUserStore {
  username: string;
  email: string;
  password: string;
}

export const getIntialStateUserStore = () => {
  return {
    username: "",
    email: "",
    password: "",
  };
};

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "userStore" })
export class UserStore extends Store<IUserStore> {
  constructor() {
    super(getIntialStateUserStore());
  }
}
