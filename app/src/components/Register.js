import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const registerUser = gql`
    mutation register($name: String!, $username: Strin!, $password: String!){
        register(name: $name, username: $username, passwrod: $password)
    }
`;

const RegisterPage = () => (
    <div>
        <h2>Register</h2>
        <RegisterForm/>
    </div>
)

class RegisterForm extends Component {
    state= {
        name: '',
        username: '',
        passwrod: ''
    };

    render() {
        return(
            <p>Hola</p>
        )
    }
}


export default RegisterPage;