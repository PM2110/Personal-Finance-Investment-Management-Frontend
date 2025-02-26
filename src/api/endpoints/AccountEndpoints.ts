const AccountEndpoints = {
    addAccount: () => `/account`,
    getAllAccounts: (userID: number) => `/account/${userID}`,
    updateAccount: (accountID: number) => `/account/${accountID}`,
    deleteAccount: (accountID: number) => `/account/${accountID}`,
}

export default AccountEndpoints;