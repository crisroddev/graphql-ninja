import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const loginUser = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
        }
    }
`;


export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
            </div>
        )
    }
};
