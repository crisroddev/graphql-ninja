import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhots:4000/graphql'
});

class App extends Component () {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
