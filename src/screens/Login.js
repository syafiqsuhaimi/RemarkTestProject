import { inject, observer } from 'mobx-react';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import auth from '../api/auth';


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleUsernameChange = (username) => {
    this.setState({ username })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  handleLogin = () => {
    const { username, password } = this.state
    auth.login(username, password).then(token => {
      console.log("login succeed", token)
      const { setAuthToken } = this.props.store.AuthStore
      setAuthToken(token)
    }).catch(err => {
      console.log("login ", err)
    })
  }

  render() {
    return (
      <View>
        <TextInput placeholder='username' onChangeText={this.handleUsernameChange} />
        <TextInput placeholder='password' onChangeText={this.handlePasswordChange} />
        <Button title='Submit' onPress={this.handleLogin} />
      </View>
    )
  }
}

export default inject("store")(observer(Login));