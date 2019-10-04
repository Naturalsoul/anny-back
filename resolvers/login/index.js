const jwt = require('jwt-simple');
const { find, save, update } = require('../../db');
const { user } = require('../../models');
const secret = 'KOeFebjbIZfkHlyX-WzCpOSk';

module.exports = {
    doLogin: async ({ name, email, avatar, googleId, tokenId, accessToken }) => {
        console.log('verifying token...')
        accessToken = await jwt.decode(accessToken, secret);
        console.log('accessToken', accessToken);

        let { tokenId: _tokenId, errmsg } = await find(
            user,
            null,
            {
                tokenId,
                email,
            }
        );

        if (typeof _tokenId === 'undefined') {
            const { _tokenId } = await save (
                user,
                {
                    name,
                    email,
                    avatar,
                    googleId,
                    tokenId,
                    accessToken,
                }
            );
        } else {
            return _tokenId;
        }
    },
};