import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
{
    me {
        id
        name
        username
        car {
            id
            make
            model
        }
    }
}
`;

