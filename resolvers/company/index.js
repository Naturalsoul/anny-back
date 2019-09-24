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
        const { _id, errmsg } = await save (
            company,
            {
                name,
                rut,
            }
        );

        if (typeof _id !== 'undefined') return _id;
        else throw new Error(errmsg);
    },
    updateCompany: async ({ _id, name, rut }) => {
        const { errmsg } = await update (
            company,
            {
                _id,
            },
            {
                name,
                rut,
            }
        );

        if (typeof errmsg !== 'undefined') throw new Error(errmsg);
        else return _id;
    },
    deactiveCompany: async ({ _id }) => {
        const { errmsg } = await update (
            company,
            {
                _id,
            },
            {
                active: false,
            }
        );

        if (typeof errmsg !== 'undefined') throw new Error(errmsg);
        else return _id;
    },
    activeCompany: async ({ _id }) => {
        const { errmsg } = await update (
            company,
            {
                _id,
            },
            {
                active: true,
            }
        );

        if (typeof errmsg !== 'undefined') throw new Error(errmsg);
        else return _id;
    },
};