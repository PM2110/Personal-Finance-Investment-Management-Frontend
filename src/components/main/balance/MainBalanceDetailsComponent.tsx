import { RiCloseLine } from "react-icons/ri";
import { BalanceData } from "../../../redux/balanceSlice";
import { getCurrency } from "../../currency";
import { useSelector } from "react-redux";

interface MainBalanceDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    balance: BalanceData | null,
}

const MainBalanceDetailsComponent: React.FC<MainBalanceDetailsComponentProps> = ({ isVisible, onClose, balance }) => {
    
    const transactions = useSelector((state) => state.transaction.data);
    
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row w-full items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] w-full">Balance: {balance?.balanceName} ({balance?.currency})</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        TRANSACTIONS
                    </div>
                    <div className="px-4 text-[13px] text-[#666D80]">
                        {transactions && transactions.length !== 0 ? transactions.map((transaction, index) => (
                            <div key={index}>{transaction.transactionID}</div>
                        )) : "No members found." }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBalanceDetailsComponent;