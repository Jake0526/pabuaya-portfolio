import React, { Component } from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import CryptoJS from 'crypto-js';

import HeaderContent from '../adminlte-common/HeaderContent.jsx';
import MenuContent from '../adminlte-common/MenuContent.jsx';
import FooterContent from '../adminlte-common/FooterContent.jsx';

import DashboardContent from './content/DashboardContent.jsx';

const responseLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const firstProperty = Object.keys(response.data)[0];
    const encryptedData = response.data[firstProperty];

    const bytes = CryptoJS.AES.decrypt(encryptedData, '4dm!n!5tr4t0r');
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    response.data[firstProperty] = decryptedData;

    return response;
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([
    responseLink,
    new HttpLink({
      uri: '/graphql',
      fetch: async (uri, options) => {
        let optionBody = JSON.parse(options.body);
        optionBody.query = `encrypted,${CryptoJS.AES.encrypt(
          JSON.parse(options.body).query,
          '4dm!n!5tr4t0r'
        ).toString()}`;

        options.body = JSON.stringify(optionBody);

        return fetch(uri, options);
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

export default class DashboardComponent extends Component {
	constructor(props) {
    super(props);
  }

	componentDidMount() {
    document.title = "AJP - Dashboard"
    document.body.className = "sidebar-mini layout-fixed layout-footer-fixed control-sidebar-slide-open layout-navbar-fixed";
  }

	render() {
		return (
      <>
        <div className="wrapper">
          
          <ApolloProvider client={client}>
            <HeaderContent />

            <MenuContent page="dashboard" state={{ name: "Jake" }} />
            <DashboardContent props={this.props.state} />

            <FooterContent />
          </ApolloProvider>
        </div>
      </>
		);
	}
};