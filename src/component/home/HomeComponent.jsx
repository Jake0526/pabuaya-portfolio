import React, { Component } from 'react';

import HomeContent from './content/HomeContent.jsx';

import { executeScript } from './script/script.js';

export default class HomeComponent extends Component {
	constructor(props) {
    super(props);
  }

	componentDidMount() {
    executeScript();

    document.title = "Welcome to AJP website"

    document.body.className = "hold-transition layout-top-nav layout-navbar-fixed";
    document.body.style = `
    height: auto;`;
  }

	render() {
		return (
      <>
        <HomeContent />
      </>
		);
	}
};