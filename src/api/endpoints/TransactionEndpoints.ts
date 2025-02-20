const TransactionEndpoints = {
    addTransaction: () => `/transaction`,
    getAllTransactions: (userName: string) => `/transaction/${userName}`,
    updateTransaction: (transactionID: string) => `/transaction/${transactionID}`,
    deleteTransaction: (transactionID: string) => `/transaction/${transactionID}`,
}

export default TransactionEndpoints;