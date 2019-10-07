module.exports = {
    company: {
        saveCompany: `
            saveCompany(token: String!, name: String!, rut: String!): ID
        `,
        updateCompany: `
            updateCompany(_id: String!, name: String!, rut: String!, token: String!): ID
        `,
        changeStatusCompany: `
            changeStatusCompany(token: String!, _id: String!, rut: String!, active: Boolean!): ID
        `,
    },
};