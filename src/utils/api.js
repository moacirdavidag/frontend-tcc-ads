require('dotenv').config();

module.exports = {
    url: process.env.NODE_ENV === 'local' ? 'http://localhost:4000' : `${process.env.REACT_API_URL}`; 
}

    
