import React from 'react';
import { observer, Provider } from 'mobx-react';
import stores from './stores';
import Navigator from './navigations';

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Navigator />
      </Provider>
    )
  }
}

export default observer(App);
