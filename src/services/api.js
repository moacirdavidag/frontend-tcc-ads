require('dotenv').config();

module.exports = {
    url: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://graphql-backend-tcc.herokuapp.com/' 
}

    