const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const { find, save, update, ObjectId } = require('../../db');
const { worker } = require('../../models');

module.exports = {
    getWorkers: async ({ token, _id }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado.');

        const workers = await find (
            worker,
            { path: 'company', select: 'name rut' },
            { company: ObjectId(_id) }
        );

        return workers;
    },
    saveWorker: async ({ token, company, name, rut, from_date }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado.');

        const { _id, errmsg } = await save(
            worker,
            {
                name,
                rut,
                company: ObjectId(company),
                from_date: new Date(from_date),
            }
        );

        if (typeof errmgs !== 'undefined') throw new Error(errmsg);
        else return _id;
    },
    updateWorker: async ({ token, _id, name, rut, from_date, to_date }) => {
        const userData = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!userData._id) throw new Error('No se encuentra autenticado.');

        const { _id: _id_out, errmsg } = await update(
            worker,
            {
                _id,
                rut,
            },
            {
                name,
                from_date,
                to_date,
            }
        );

        if (typeof errmsg !== 'undefined') throw new Error(errmsg);
        else return _id_out;
    },
};
