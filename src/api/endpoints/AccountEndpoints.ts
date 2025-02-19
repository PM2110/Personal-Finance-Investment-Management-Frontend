const AccountEndpoints = {
    addAccount: () => `/account`,
    getAllAccounts: (userName: string) => `/account/${userName}`,
    updateAccount: (accountID: number) => `/account/${accountID}`,
    deleteAccount: (accountID: number) => `/account/${accountID}`,
}

export default AccountEndpoints;