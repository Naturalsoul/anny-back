const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    ObjectId: mongoose.Types.ObjectId,
    initialize: async () => {
        try {
            await mongoose.connect(
                `mongodb://localhost/anny?retryWrites=true&w=majority`,
                { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, }
            );

            console.log('Database Initiated.');
        } catch (e) {
            console.log('Database Error.');
            console.log(e);
        }
    },
    find: async (model, populate = '', filters = {}) => new Promise(
        async (resolve, reject) => {
            try {
                let res;

                if (Object.keys(filters).length) {
                    res = await model.find(filters).populate(populate);
                } else {
                    res = await model.find().populate(populate);
                }

                resolve(res);
            } catch (e) {
                console.log('Error trying find: ', e);
                reject(e);
            }
        }
    ),
    save: async (model, data = {}) => new Promise (
        async (resolve, reject) => {
            const row = new model(data);

            try {
                const newRow = await row.save();

                resolve(newRow);
            } catch (e) {
                console.log('Error trying save: ', e);
                reject(e);
            }
        }
    ),
    update: (model, filters, data) => new Promise (
        async (resolve, reject) => {
            try {
                const res = await model.findOneAndUpdate(filters, data, { new: true });

                if (res) {
                    resolve(res);
                } else {
                    reject(new Error('Error al actualizar.'));
                }
            } catch (e) {
                console.log('Error trying update: ', e);
                reject(e);
            }
        }
    ),
};