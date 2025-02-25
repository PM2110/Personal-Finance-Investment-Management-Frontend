import { BudgetData } from "../../redux/budgetSlice";
import APIMethods from "../APIMethods";
import BudgetEndpoints from "../endpoints/BudgetEndpoints";

const BudgetAPIManager = {
    addBudget: (data: BudgetData) => {
        const url = BudgetEndpoints.addBudget();
        return APIMethods.post(url, data);
    },
    getAllBudget: (userID: number) => {
        const url = BudgetEndpoints.getAllBudget(userID);
        return APIMethods.get(url);
    },
    updateBudget: (budgetID: number, data: BudgetData) => {
        const url = BudgetEndpoints.updateBudget(budgetID);
        return APIMethods.put(url, data);
    },
    deleteBudget: (budgetID: number) => {
        const url = BudgetEndpoints.deleteBudget(budgetID);
        return APIMethods.delete(url);
    }
}

export default BudgetAPIManager;