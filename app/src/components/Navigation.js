import React from 'react';
import { Link } from 'react-router-dom';

const NavigationNoAuth = () => (
    <ul>
        <li><link to="/login">Login</link></li>
        <li><link to="/register">Register</link></li>
    </ul>
);

// const NavigationWithAUth = () => (

// );


const Navigation = () => (
    <div>
        <NavigationNoAuth/>
    </div>

);

export default Navigation;
