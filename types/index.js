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
    Worker: `
        type Worker {
            _id: ID,
            name: String,
            rut: String,
            company: Company,
            from_date: Date,
            to_date: Date
        }
    `,
};