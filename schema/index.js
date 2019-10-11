const { buildSchema } = require('graphql');

// Login
const { login: { doLogin } } = require('../queries');

// Companies
const { company: { getCompanies } } = require('../queries');
const { company: { saveCompany, updateCompany, changeStatusCompany } } = require('../mutations');

// Workers
const { worker: { getWorkers } } = require('../queries');
const { worker: { saveWorker } } = require('../mutations');

// types
const { User, Company, Worker } = require('../types');

module.exports = buildSchema (
    `
        scalar Date

        type Query {
            ${doLogin}
            ${getCompanies}
            ${getWorkers}
        }

        type Mutation {
            ${saveCompany}
            ${updateCompany}
            ${changeStatusCompany}
            ${saveWorker}
        }
        
        ${User}
        ${Company}
        ${Worker}
    `
);