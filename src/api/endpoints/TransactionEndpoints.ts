const TransactionEndpoints = {
    addTransaction: () => `/transaction`,
    getAllTransactions: (userName: string) => `/transaction/${userName}`,
    updateTransaction: (transactionID: number) => `/transaction/${transactionID}`,
    deleteTransaction: (transactionID: number) => `/transaction/${transactionID}`,
}

export default TransactionEndpoints;