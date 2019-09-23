const { buildSchema } = require('graphql');

// Companies
const { company: { getCompanies } } = require('../queries');

// types
const { Company } = require('../types');

module.exports = buildSchema (
    `
        scalar Date

        type Query {
            ${getCompanies}
        }
        
        ${Company}
    `
);