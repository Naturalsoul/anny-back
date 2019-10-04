const { buildSchema } = require('graphql');

// Login
const { login: { doLogin } } = require('../queries');

// Companies
const { company: { getCompanies } } = require('../queries');
const { company: { saveCompany, updateCompany } } = require('../mutations');

// types
const { User, Company } = require('../types');

module.exports = buildSchema (
    `
        scalar Date

        type Query {
            ${doLogin}
            ${getCompanies}
        }

        type Mutation {
            ${saveCompany}
            ${updateCompany}
        }
        
        ${User}
        ${Company}
    `
);