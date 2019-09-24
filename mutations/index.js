module.exports = {
    company: {
        saveCompany: `
            saveCompany(name: String, rut: String): ID
        `,
        updateCompany: `
            updateCompany(_id: String, name: String, rut: String): ID
        `,
        deactiveCompany: `
            deactiveCompany(_id: String): ID
        `,
        activeCompany: `
            activeCompany(_id: String): ID
        `,
    },
};