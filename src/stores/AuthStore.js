import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import { isHydrated, makePersistable } from "mobx-persist-store";

class AuthStore {
  authToken = '';

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, { name: 'AuthStore', properties: ['authToken'], storage: AsyncStorage })
  }

  setAuthToken = (token) => {
    this.authToken = token;
  }

  get isHydrated() {
    return isHydrated(this);
  }
}

export default new AuthStore()