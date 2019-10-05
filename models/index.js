const { model, Schema } = require('mongoose');

module.exports = {
    user: model (
        'user',
        Schema({
            name: String,
            email: { type: String, unique: true, },
            avatar: String,
            googleId: String,
            tokenId: String,
            accessToken: String,
            created_at: { type: Date, default: Date.now }
        }),
        'user'
    ),
    company: model (
        'company',
        Schema({
            name: String,
            rut: String,
            user: { type: Schema.Types.ObjectId, ref: 'user' },
            active: { type: Boolean, default: true },
            created_at: { type: Date, default: Date.now },
        }),
        'company'
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
        }),
        'worker'
    ),
};