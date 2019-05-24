const fetch = require('node-fetch');

function fetchGraphQL(query, variables = {}) {
    const response = await ('http://localhost:3000/graphql', {
        method: 'POST',
        header: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return response.json();

}

const index = async (req, res) => {
    const query = `{
        users {
            id
            name
        }
    }`;
    const response = await fetchGraphQL(query);
    return res.render('index' ,{
        intro: 'Welcome:',
        users: response.data.users
    });
};

module.exports = {
    index
}

