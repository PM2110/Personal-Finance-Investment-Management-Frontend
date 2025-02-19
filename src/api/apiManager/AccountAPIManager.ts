import APIMethods from "../APIMethods";
import AccountEndpoints from "../endpoints/AccountEndpoints";

interface AccountData {
    userID: number,
    accountID: number,
    accountHolder: string,
    accountType: string,
    balance: number,
    currency: string,
}

const AccountAPIManager = {
    addAccount: (data: AccountData) => {
        const url = AccountEndpoints.addAccount();
        return APIMethods.post(url, data);
    },
    getAllAccounts: (userName: string) => {
        const url = AccountEndpoints.getAllAccounts(userName);
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