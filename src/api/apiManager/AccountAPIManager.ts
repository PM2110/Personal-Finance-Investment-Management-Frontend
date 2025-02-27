import { AccountData } from "../../redux/accountSlice";
import APIMethods from "../APIMethods";
import AccountEndpoints from "../endpoints/AccountEndpoints";

const AccountAPIManager = {
    addAccount: (data: AccountData) => {
        const url = AccountEndpoints.addAccount();
        return APIMethods.post(url, data);
    },
    getAccount: (accountID: number) => {
        const url = AccountEndpoints.getAccount(accountID);
        return APIMethods.get(url);
    },
    getAllAccounts: (userID: number) => {
        const url = AccountEndpoints.getAllAccounts(userID);
        return APIMethods.get(url);
    },
    updateAccount: (accountID: number, data: AccountData) => {
        const url = AccountEndpoints.updateAccount(accountID);
        return APIMethods.put(url, data);
    },
    deleteAccount: (accountID: number) => {
        const url = AccountEndpoints.deleteAccount(accountID);
        return APIMethods.delete(url);
    },
}

export default AccountAPIManager;