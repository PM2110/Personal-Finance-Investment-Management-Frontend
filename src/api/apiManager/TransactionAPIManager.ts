import { TransactionData } from "../../redux/transactionSlice";
import APIMethods from "../APIMethods";
import TransactionEndpoints from "../endpoints/TransactionEndpoints";

const TransactionAPIManager = {
    addTransaction: (data: TransactionData) => {
        const url = TransactionEndpoints.addTransaction();
        return APIMethods.post(url, data);
    },
    getAllTransaction: (userName: string) => {
        const url = TransactionEndpoints.getAllTransactions(userName);
        return APIMethods.get(url);
    },
    updateTransaction: (transactionID: string, data: TransactionData) => {
        const url = TransactionEndpoints.updateTransaction(transactionID);
        return APIMethods.put(url, data);
    },
    deleteTransaction: (transactionID: string) => {
        const url = TransactionEndpoints.deleteTransaction(transactionID);
        return APIMethods.delete(url);
    },
}

export default TransactionAPIManager;