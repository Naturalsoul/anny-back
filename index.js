const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');

const { initialize } = require('./db');

const app = express();

app.use(cors());
initialize(); // db init

app.listen(process.env.PORT || 4000, console.log('Server Listening!'));