import React from 'react';
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

const activeSession = Component => props => (
    <Query query={query}>
    {({ data, refetch }) => (
        <Component { ...props} session={data}
        refetch={refetch}/>
    )}
    </Query>
);

export default activeSession;