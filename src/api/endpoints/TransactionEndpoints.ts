const TransactionEndpoints = {
    addTransaction: () => `/transaction`,
    getAllTransactions: (userName: string) => `/transaction/${userName}`,
    acceptTransaction: (transactionID: string) => `/transaction/acceptTransaction/${transactionID}`,
    updateTransaction: (transactionID: string) => `/transaction/${transactionID}`,
    deleteTransaction: (transactionID: string) => `/transaction/${transactionID}`,
}

export default TransactionEndpoints;