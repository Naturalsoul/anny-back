const { find } = require('../../db');
const { worker } = require('../../models');

module.exports = {
    getWorkers: async () => {
        const workers = await find (
            worker,
            { path: 'company', select: 'name' }
        );

        return workers;
    },
};
