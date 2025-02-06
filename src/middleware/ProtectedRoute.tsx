import React, { Component } from 'react';
import axios from 'axios';

export default class ProtectedRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: null,
      isLoad: false,
      userID: null,
      email: "",
      name: "",
      clientType: "",
    };
  }

  componentDidMount = async () => {
    const isLoginResponse = await axios.post('/is-login', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if(isLoginResponse.data.isLogin) {
      this.setState({
        isLogin: true,
        isLoad: true,
        userID: isLoginResponse.data.session[0],
        email: isLoginResponse.data.session[1],
        name: isLoginResponse.data.session[3],
        clientType: isLoginResponse.data.session[4],
      });
    }else {
      window.location.href = '/login';
    }
  }

  render() {
    const { Element } = this.props;

    if(this.state.isLoad) {
      return <Element state={this.state} />
    } else {
      return (
        <></>
      )
    }
  }
}