import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Imports of Components
import User from './components/User';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <div>
      <ApolloProvider client={client}>
        <User/>
      </ApolloProvider>
    </div>
    );
  }
}

export default App;