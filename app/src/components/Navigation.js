import React from 'react';
import { Link } from 'react-router-dom';

const NavigationNoAuth = () => (
    <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
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
