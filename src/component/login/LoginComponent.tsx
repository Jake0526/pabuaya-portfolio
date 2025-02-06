import React, { Component } from 'react';

import LoginContent from './content/LoginContent';

export default class LoginComponent extends Component {
	constructor(props: any) {
    super(props);
  }

	componentDidMount() {
    document.title = "Login"

    document.body.className = "hold-transition login-page";
    // document.body.style = `
    // background-image: url(images/medical-bg.jpg); 
    // background-position: center; 
    // background-repeat: no-repeat;
    // background-size: cover;`;
    document.body.setAttribute('style', `
      background-color: #0b6477;
      background-position: center; 
      background-repeat: no-repeat;
      background-size: cover;`);
  }

	render() {
		return (
      <div className="login-box">
        <LoginContent />
      </div>
		);
	}
};