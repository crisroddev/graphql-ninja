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


const LoginPage = () => (
    <div>
      <h2>Register</h2>
      <LoginForm />
    </div>
);

class LoginForm extends Component {
    state = {
        username:'',
        password: ''
    };

    usernameChanged = ({ target: { value}}) => {
        this.setState({ username: value});
    }

    passwordChanged = ({ target: { value}}) => {
        this.setState({ password: value});
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default LoginPage;
