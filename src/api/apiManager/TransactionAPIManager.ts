import APIMethods from "../APIMethods";
import TransactionEndpoints from "../endpoints/TransactionEndpoints";

interface TransactionData {
    transactionID: number,
    userID: number,
    amount: number,
    status: string,
    dateTime: Date,
    from: string,
    to: string,
    category: string,
    currency: string,
}

const TransactionAPIManager = {
    addTransaction: (data: TransactionData) => {
        const url = TransactionEndpoints.addTransaction();
        return APIMethods.post(url, data);
    },
    getAllTransaction: (userName: string) => {
        const url = TransactionEndpoints.getAllTransactions(userName);
        return APIMethods.get(url);
    },
    updateTransaction: (transactionID: number, data: TransactionData) => {
        const url = TransactionEndpoints.updateTransaction(transactionID);
        return APIMethods.put(url, data);
    },
    deleteTransaction: (transactionID: number) => {
        const url = TransactionEndpoints.deleteTransaction(transactionID);
        return APIMethods.delete(url);
    },
}

export default TransactionAPIManager;