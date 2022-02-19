import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { inject, observer } from "mobx-react";
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

class Navigator extends React.Component {

  handleLogout = () => {
    const { setAuthToken } = this.props.AuthStore
    setAuthToken("")
  }

  render() {
    const { authToken, isHydrated } = this.props.AuthStore

    if (!isHydrated)
      return (
        <View style={styles.splashContainer}>
          <Text style={styles.splashText}>Remark Malaysia Splash</Text>
        </View>
      )

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
                    onPress={this.handleLogout}
                  />
                ),
              }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    height: Dimensions.get("window").height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  splashText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  }
})

export default inject("AuthStore")(observer(Navigator));