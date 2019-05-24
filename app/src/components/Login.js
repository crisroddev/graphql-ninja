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

    submitForm = (event, login) => {
        event.preventDefault();
        login({
            variables: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(({ data}) => {
            // console.log(data);
            localStorage.setItem('token', data.login.token)
        }).catch(error => console.error(error));
    };

    render() {
        const validForm =
        this.state.username !== '' &&
        this.state.password !== '';


        return (
            <Mutation mutation={loginUser}>
            {( login, { loading, error }) => (
                <form onSubmit={evt => this.submitForm(evt, login)}>
                    <label>
                        <span>Username</span>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.usernameChanged}
                    />
                    </label>
                    <label>
                        <span>Password</span>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.passwordChanged}
                        />
                    </label>
                    <div>
                        <button disabled={!validForm}>Login</button>
                    </div>
                 </form>
                )}
            </Mutation>
        )
    }
}

export default LoginPage;
