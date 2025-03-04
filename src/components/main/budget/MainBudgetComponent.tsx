import { useEffect, useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import MainBudgetCardComponent from "./MainBudgetCardComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { BudgetData, deleteBudget, fetchBudget } from "../../../redux/budgetSlice";
import MainBudgetDetailsComponent from "./MainBudgetDetailsComponent";
import { AccountData, fetchAccount } from "../../../redux/accountSlice";
import MainBudgetEditForm from "./MainBudgetEditForm";
import toast from "react-hot-toast";
import { MdAccountBalance } from "react-icons/md";

interface MainBudgetComponent {
    isVisible: string,
    onClose: () => void
}

const getDuration: (selected: number) => string = (selected) => {
    switch (selected){
        case 1:
            return "24H";
        case 2:
            return "7D";
        case 3:
            return "1M";
        case 4:
            return "6M";
        case 5:
            return "12M";
        default:
            return "";
    }
}

const MainBudgetComponent = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const { userID } = useSelector((state) => state.user.data);
    const accounts: AccountData[] = useSelector((state) => state.account?.data);
    const [selectedAccount, setSelectedAccount] = useState(accounts ? accounts[0] : null);
    const [selected, setSelected] = useState(1);
    const budgetList: BudgetData[] = useSelector((state) => state.budget?.data).filter((budget: BudgetData) => budget.accountID === selectedAccount?.accountID && budget.budgetDuration === getDuration(selected));
    
    const [selectedBudget, setSelectedBudget] = useState<BudgetData | null>(null);

    const [visibleMainBudgetDetails, setVisibleMainBudgetDetails] = useState(false);
    const [visibleMainBudgetEditForm, setVisibleMainBudgetEditForm] = useState(false);


    useEffect(() => {
        dispatch(fetchAccount(userID));
        dispatch(fetchBudget(userID));
    }, [dispatch, userID])

    const handleVisibleMainBudget: () => void = () => {
        if(visibleMainBudgetDetails){
            setSelectedBudget(null);
        }
        setVisibleMainBudgetDetails(!visibleMainBudgetDetails);
    }

    const handleVisibleMainBalanceEdit: () => void = () => {
        if(visibleMainBudgetEditForm){
            setSelectedBudget(null);
        }
        setVisibleMainBudgetEditForm(!visibleMainBudgetEditForm);
    }

    const handleDelete: (budgetID: number) => void = (budgetID) => {
        try {
            dispatch(deleteBudget(budgetID));
            toast.success("Budget deleted successfully.")
        } catch (error) {
            toast.error("Error while deleting budget.");
            console.log("Error while deleting budget ", error);
        }
    }

    return (
        <div className="w-full h-full flex flex-col gap-4 overflow-y-hidden">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-4 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] ">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>24H</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>7D</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>1M</button>
                    <button onClick={() => setSelected(4)} className={`${selected === 4 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>6M</button>
                    <button onClick={() => setSelected(5)} className={`${selected === 5 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>12M</button>
                </div>
                <div className="flex gap-3 justify-between text-[14px]">
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                        <MdAccountBalance className="text-[14px]"/>
                        <select onChange={(e) => setSelectedAccount(accounts.filter((account) => account.accountID === Number(e.target.value))[0])} className="focus:outline-none pr-1">
                            {accounts && accounts.length !== 0 && accounts.map((account, index) => (
                                <option key={index} value={account?.accountID}>{account?.accountHolder} (Acc No.: xxx{account?.accountNumber.slice(account?.accountNumber.length - 4)})</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            {budgetList && budgetList.length !== 0 ? <div className="max-h-full w-full overflow-y-auto p-2">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                    {budgetList.map((budget: BudgetData, index: number) => (
                        <MainBudgetCardComponent key={index} budget={budget} setSelectedBudget={setSelectedBudget} handleDelete={handleDelete} handleVisibleEdit={handleVisibleMainBalanceEdit} handleVisibleDetails={handleVisibleMainBudget} />
                    ))}
                </div>
            </div> : <div className="flex h-full justify-center items-center text-[#666D80]">No budget found for this duration.</div> }
            {(visibleMainBudgetDetails || visibleMainBudgetEditForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainBudgetDetailsComponent isVisible={visibleMainBudgetDetails} onClose={handleVisibleMainBudget} accounts={accounts} budget={selectedBudget} />
            {visibleMainBudgetEditForm && <MainBudgetEditForm isVisible={visibleMainBudgetEditForm} onClose={handleVisibleMainBalanceEdit} accounts={accounts} budget={selectedBudget} />}
        </div>
    );
}

export default MainBudgetComponent;