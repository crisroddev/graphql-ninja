import React, { Component } from 'react';
import activeSession from './ActiveSession';

const ProfilePage = ({ session }) => (
    <div>
        <Profile session={session}/>
    </div>
);

class Profile extends Component {
    render() {
        console.log(this.props.session)
        return (
            <div>
                <h2>Hello, { this.props.session.me.name}!</h2>
            </div>
        );
    }
}

export default activeSession(ProfilePage);