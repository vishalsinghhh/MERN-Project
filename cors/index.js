const cors = require('cors')

const corsOption ={
    origin:['http://localhost:3000', 'https://oruphones.netlify.app'],
    optionsSuccessStatus:200
}

module.exports = cors(corsOption)