module.exports = {
    login: {
        doLogin: `
            doLogin(name: String!, email: String!, avatar: String!, tokenId: String!, accessToken: String!, googleId: String!): String
        `,
        getUserInfo: `
            getUserInfo(tokendId: String!): User
        `,
    },
    company: {
        getCompanies: `
            getCompanies: [ Company ]
        `,
    }
};