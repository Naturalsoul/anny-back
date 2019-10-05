const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
require('dotenv').config();

const schema = require('./schema');
const resolvers = require('./resolvers');

const { initialize } = require('./db');

const app = express();

const auth = jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
});

app.use(cors());
initialize(); // db init

app.use(
    '/graphql',
    bodyParser.json(),
    auth,
    express_graphql(
        req => ({
            schema: schema,
            context: {
                user: req.user,
            },
            rootValue: resolvers,
            graphiql: true,
        })
    )
);

app.listen(process.env.PORT || 4000, console.log('Server Listening!'));