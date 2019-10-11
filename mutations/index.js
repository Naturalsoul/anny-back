module.exports = {
    company: {
        saveCompany: `
            saveCompany(token: String!, name: String!, rut: String!): ID
        `,
        updateCompany: `
            updateCompany(token: String!, _id: String!, name: String!, rut: String!): ID
        `,
        changeStatusCompany: `
            changeStatusCompany(token: String!, _id: String!, rut: String!, active: Boolean!): ID
        `,
    },
    worker: {
        saveWorker: `
            saveWorker(token: String!, company: String!, name: String!, rut: String!, from_date: Date!): ID
        `,
    },
};