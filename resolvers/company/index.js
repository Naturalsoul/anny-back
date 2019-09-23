const { find, save, update } = require('../../db');
const { company } = require('../../models');

module.exports = {
    getCompanies: async () => {
        const companies = await find (
            company
        );

        return companies;
    },    
    saveCompany: async ({ name, rut }) => {
        const { _id } = await save (
            company,
            {
                name,
                rut,
            }
        );

        return _id;
    },
    updateCompany: async ({ _id, name, rut }) => {
        const { _id } = await update (
            company,
            {
                _id,
            },
            {
                name,
                rut,
            }
        );

        return _id;
    },
    deactiveCompany: async ({ _id }) => {
        const { _id } = await update (
            company,
            {
                _id,
            },
            {
                active: false,
            }
        );

        return _id;
    },
    activeCompany: async ({ _id }) => {
        const { _id } = await update (
            company,
            {
                _id,
            },
            {
                active: true,
            }
        );

        return _id;
    },
};