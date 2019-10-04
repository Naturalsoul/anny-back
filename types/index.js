module.exports = {
    User: `
        type User {
            _id: ID,
            name: String,
            email: String,
            avatar: String,
            googleId: String,
            tokenId: String,
            accessId: String
        }
    `,
    Company: `
        type Company {
            _id: ID,
            name: String,
            rut: String,
            active: Boolean,
            created_at: Date
        }
    `,
};