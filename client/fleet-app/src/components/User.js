import React, { Component } from 'react';
import { Query } from 'react-apollo';
import query from '../graphql/query';

export default class User extends Component {
  render() {
    return (
        <div>
            <Query query={query}>
                {({ data }) => {
                    console.log(data);
                    return null;
                }}
            </Query>
        </div>
    );
  }
}
