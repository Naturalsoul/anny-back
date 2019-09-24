const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');

const schema = require('./schema');
const resolvers = require('./resolvers');

const { initialize } = require('./db');

const app = express();

app.use(cors());
initialize(); // db init

app.use(
    '/graphql',
    express_graphql({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

app.listen(process.env.PORT || 4000, console.log('Server Listening!'));