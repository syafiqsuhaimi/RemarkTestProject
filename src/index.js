import React from 'react';
import { Provider } from 'mobx-react';
import RootStore from './stores';
import Navigator from './navigations';

class App extends React.Component {
  render() {
    return (
      <Provider store={RootStore}>
        <Navigator />
      </Provider>
    )
  }
}

export default App;
