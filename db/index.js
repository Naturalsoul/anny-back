const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    ObjectId: mongoose.Types.ObjectId,
    initialize: () => {
        try {
            mongoose.connect(
                `mongodb://127.0.0.1:27017/anny`,
                { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true, }
            );

            const db = mongoose.connection;

            db.on('error', (err) => console.log('Error connecting to Database: ', err));
            db.once('open', () => console.log('Database Initiated.'));
            
        } catch (e) {
            console.log('Database Error.');
            console.log(e);
        }
    },
    find: async (model, populate = '', filters = {}) => {
        try {
            let res;

            if (Object.keys(filters).length) {
                res = await model.find(filters).populate(populate);
            } else {
                res = await model.find().populate(populate);
            }

            return res;
        } catch (e) {
            console.log('Error trying find: ', e);
            return e;
        }
    },
    save: async (model, data = {}) =>  {
        const row = new model(data);

        try {
            const newRow = await row.save();

            return newRow;
        } catch (e) {
            console.log('Error trying save: ', e);
            return e;
        }
    },
    update: async (model, filters, data) => {
        try {
            const res = await model.findOneAndUpdate(filters, data, { new: true });

            if (res) {
                return res;
            } else {
                return new Error('Error al actualizar.');
            }
        } catch (e) {
            console.log('Error trying update: ', e);
            return e;
        }
    },
};