import { RiCloseLine } from "react-icons/ri";
import { BudgetData } from "../../../redux/budgetSlice";
import { useSelector } from "react-redux";
import { AccountData } from "../../../redux/accountSlice";

interface MainBudgetDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    budget: BudgetData | null,
    accounts: AccountData[],
}

const MainBudgetDetailsComponent: React.FC<MainBudgetDetailsComponentProps> = ({ isVisible, onClose, budget, accounts }) => {
    
    const transactions = useSelector((state) => state.transaction.data);
    const account = accounts.filter((acc) => acc.accountID === budget?.accountID)[0];

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col px-4 pt-4">
                    <div className="flex flex-row w-full items-center justify-between">
                        <h2 className="text-[16px] w-full">Account Number: xxx{account?.accountNumber.slice(account?.accountNumber.length - 4, account?.accountNumber.length)}</h2>
                        <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                            <RiCloseLine />
                        </button>
                    </div>
                    <div>Budget Category: {budget?.budgetCategory}</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        TRANSACTIONS
                    </div>
                    <div className="px-4 text-[13px] text-[#666D80]">
                        {transactions && transactions.length !== 0 ? transactions.map((transaction, index) => (
                            <div key={index}>{transaction.transactionID}</div>
                        )) : "No transactions found from this account with provided category." }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBudgetDetailsComponent;