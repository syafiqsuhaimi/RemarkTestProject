
import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import AuthStore from './AuthStore.js';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

class RootStore {
  AuthStore = AuthStore;

  constructor() {
    Promise.all([
      hydrate('auth', this.AuthStore),
    ])
      .then(() => console.log("done load mobx store"));
  }
};

export default new RootStore();