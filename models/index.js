const { Schema, model } = require('mongoose');

module.exports = {
    company: model (
        'company',
        Schema({
            name: String,
            rut: String,
            active: { type: Boolean, default: true },
            created_at: { type: Date, default: Date.now },
        })
    ),
    worker: model (
        'worker',
        Schema({
            name: String,
            rut: String,
            company: { type: Schema.Types.ObjectId, ref: 'company' },
            from_date: { type: Date, default: Date.now },
            to_date: { type: Date, default: null },
            created_at: { type: Date, default: Date.now },
        })
    ),
};