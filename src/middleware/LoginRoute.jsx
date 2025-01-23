import React, { Component } from 'react';
import axios from 'axios';

export default class LoginRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: null,
      isLoad: false,
      userID: null,
      email: "",
      name: "",
    };
  }

  componentDidMount = async () => {
    document.body.style = `
    background-image: url(images/r-residencia.jpg); 
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;`;

    const isLoginResponse = await axios.post('/is-login', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if(isLoginResponse.data.isLogin) {
      if (isLoginResponse.data.session[4] === 'customer') {
        window.location.href = '/customer/catalog';
      }
    }else {
      this.setState({
        isLoad: true
      });
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