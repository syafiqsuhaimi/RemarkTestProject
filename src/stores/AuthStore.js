import { persist } from "mobx-persist";
import { observable, action } from "mobx";

class AuthStore {
  @persist @observable authToken = '';

  @action
  setAuthToken(token) {
    console.log("set auth token ", token)
    this.authToken = token;
  }
}

export default new AuthStore()