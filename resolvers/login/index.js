const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const { find, save, update } = require('../../db');
const { user } = require('../../models');

module.exports = {
    doLogin: async ({ name, email, avatar, googleId }) => {
        const userData = await find (
            user,
            null,
            {
                email,
                googleId,
            }
        );

        if (typeof userData.errmsg !== 'undefined') {
            console.log(userData.errmsg);
            throw new Error(`Hubo un error al intentar autenticarse en la aplicación.`);
        }

        if (userData[0]._id) {
            return  jsonwebtoken.sign(
                { _id: userData[0]._id, email: userData[0].email },
                process.env.JWT_SECRET,
                { expiresIn: '1d' },
            );
        } else {
                const { _id } = await save (
                    user,
                    { name, email, avatar, googleId }
                );

                return jsonwebtoken.sign(
                    { _id, email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1y' },
                );
        }
    },
};