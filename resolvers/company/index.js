const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const { find, save, update, ObjectId } = require('../../db');
const { company } = require('../../models');

module.exports = {
    getCompanies: async ({ token }) => {
        const { _id } = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!_id) {
            throw new Error('No se encuentra autenticado.');
        }

        const companies = await find (
            company,
            null,
            { user: ObjectId(_id) }
        );

        return companies;
    },    
    saveCompany: async ({ name, rut, token }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado.');

        const { _id, errmsg } = await save (
            company,
            {
                name,
                rut,
                user: userData._id,
            }
        );

        if (typeof _id !== 'undefined') return _id;
        else throw new Error(errmsg);
    },
    updateCompany: async ({ _id, name, rut, token }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado');

        const { errmsg } = await update (
            company,
            {
                user: ObjectId(userData._id),
                _id: ObjectId(_id),
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
    changeStatusCompany: async ({ _id, rut, active, token }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado.');

        const { errmsg } = await update (
            company,
            {
                _id: ObjectId(_id),
                rut,
            },
            {
                active,
            }
        );

        if (typeof errmsg !== 'undefined') throw new Error(errmsg);
        else return _id;
    },
};