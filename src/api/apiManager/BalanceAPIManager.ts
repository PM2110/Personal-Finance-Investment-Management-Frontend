import { BalanceData } from "../../redux/balanceSlice";
import APIMethods from "../APIMethods";
import BalanceEndpoints from "../endpoints/BalanceEndpoints";

const BalanceAPIManager = {
    addBalance: (data: BalanceData) => {
        const url = BalanceEndpoints.addBalance();
        return APIMethods.post(url, data);
    },
    getAllBalance: (userID: number) => {
        const url = BalanceEndpoints.getAllBalance(userID);
        return APIMethods.get(url);
    },
    updateBalance: (balanceID: number, data: BalanceData) => {
        const url = BalanceEndpoints.updateBalance(balanceID);
        return APIMethods.put(url, data);
    },
    deleteBalance: (balanceID: number) => {
        const url = BalanceEndpoints.deleteBalance(balanceID);
        return APIMethods.delete(url);
    }
}

export default BalanceAPIManager;