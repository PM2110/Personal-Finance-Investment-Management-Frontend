import { PiMoneyFill } from "react-icons/pi";
import { BudgetData } from "../../../redux/budgetSlice";
import { getCurrency, getFlag } from "../../currency";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";

interface MainBudgetCardComponentProps {
    budget: BudgetData,
    setSelectedBudget: (budget: BudgetData) => void,
    handleDelete: (budgetID: number) => void,
    handleVisibleEdit: () => void,
    handleVisibleDetails: () => void,
}

const MainBudgetCardComponent: React.FC<MainBudgetCardComponentProps> = ({ budget, setSelectedBudget, handleDelete, handleVisibleEdit, handleVisibleDetails }) => {

    const { currencyValues, currency } = useSelector((state) => state.userPreference.data);
    
    return (
        <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl text-[14px] p-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center ">
                        <PiMoneyFill className="text-[16px]"/>
                        {budget.budgetCategory}
                </div>
                <div className="flex flex-row gap-3">
                    <button onClick={() => { setSelectedBudget(budget); handleVisibleEdit(); }} className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                        <MdOutlineModeEditOutline className="text-[16px]" />
                        <div>
                            Edit
                        </div>
                    </button>
                    <button onClick={() => { handleDelete(budget.budgetID); }} className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                        <MdDeleteOutline className="text-[16px]" />
                        <div>
                            Delete
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3 border-[#DFE1E7] border-2 rounded-xl">
                <div className="flex gap-2 items-center  bg-[#F6F8FA] p-4 rounded-t-xl">
                    <div className="h-6 w-6">
                        {getFlag(budget.currency)}
                    </div>
                    {budget.budgetCategory}
                </div>
                <div className="flex items-center justify-center gap-1  text-[32px]">
                    {currency ? getCurrency(currency) : getCurrency(budget.currency)}
                    {currency ? budget.spent / currencyValues[budget.currency] : budget.spent}
                </div>
                <div className={`flex justify-center ${0.8 * budget.limit > budget.spent ? "bg-[#EFFEFA] text-[#28806F]" : "bg-[#feefef] text-[#802828]"} w-full px-4 py-2 rounded-b-xl`}>
                    <div className="flex items-center gap-2">
                        Your spend limit is:
                        <div className="flex items-center">
                            {currency ? getCurrency(currency) : getCurrency(budget.currency)} {currency ? budget.limit / currencyValues[budget.currency] : budget.limit}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => { setSelectedBudget(budget); handleVisibleDetails(); }} className="w-full border-[#DFE1E7] border-2 rounded-lg py-2  hover:cursor-pointer">See Transactions</button>
        </div>
    );
}

export default MainBudgetCardComponent;