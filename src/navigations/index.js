import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { inject, observer } from "mobx-react";
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import { AsyncStorage, Button } from 'react-native';

const Stack = createNativeStackNavigator();

class Navigator extends React.Component {

  async componentDidMount() {
    authToken = AsyncStorage.getItem("authToken");
  }

  render() {
    const { authToken } = this.props.store.AuthStore
    console.log("token ", authToken)
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {authToken === "" ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                headerRight: (props) => (
                  <Button
                    title="Logout"
                    onPress={() => {
                      // Log out
                    }}
                  />
                ),
              }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default inject("store")(observer(Navigator));