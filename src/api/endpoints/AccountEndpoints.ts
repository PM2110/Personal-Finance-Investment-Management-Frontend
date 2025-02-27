const AccountEndpoints = {
    addAccount: () => `/account`,
    getAccount: (accountID: number) => `/account/getAccount/${accountID}`,
    getAllAccounts: (userID: number) => `/account/${userID}`,
    updateAccount: (accountID: number) => `/account/${accountID}`,
    deleteAccount: (accountID: number) => `/account/${accountID}`,
}

export default AccountEndpoints;