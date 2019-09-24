const { buildSchema } = require('graphql');

// Companies
const { company: { getCompanies } } = require('../queries');
const { company: { saveCompany, updateCompany } } = require('../mutations');

// types
const { Company } = require('../types');

module.exports = buildSchema (
    `
        scalar Date

        type Query {
            ${getCompanies}
        }

        type Mutation {
            ${saveCompany}
            ${updateCompany}
        }
        
        ${Company}
    `
);