const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const LoginResolver = require('./login');
const CompanyResolver = require('./company');
const WorkerResolver = require('./worker');

const DateType = new GraphQLScalarType({
    name: 'Date',
    description: 'Date Object',
    parseValue: value => {
        return new Date(value);
    },
    serialize: value => {
        return value.getTime();
    },
    parseLiteral: ast => {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    },
});

module.exports = {
    ...LoginResolver,
    ...CompanyResolver,
    ...WorkerResolver,
    Date: DateType,
};