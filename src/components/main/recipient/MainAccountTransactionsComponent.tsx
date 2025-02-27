import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AccountData } from "../../../redux/accountSlice";
import { TransactionData } from "../../../redux/transactionSlice";
import { useState } from "react";

interface MainAccountTransactionsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    account: AccountData | null,
}

const MainAccountTransactionsComponent: React.FC<MainAccountTransactionsComponentProps> = ({ isVisible, onClose, account }) => {
    
    const transactions = useSelector((state) => state.transaction.data).filter((transaction: TransactionData) => transaction?.senderAccountID === account?.accountID || transaction?.receiverAccountID === account?.accountID);
    const [visibleAccountNumber, setVisibleAccountNumber] = useState(false);

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col w-full items-start px-4 pt-4">
                    <div className="flex flex-row w-full items-center justify-between">
                        <h2 className="text-[16px] w-full">Account Holder: {account?.accountHolder}</h2>
                        <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                            <RiCloseLine />
                        </button>
                    </div>
                    <button onClick={() => setVisibleAccountNumber(!visibleAccountNumber)} className="text-[#666D80] text-[14px] hover:cursor-pointer">Account Number: {visibleAccountNumber ? account?.accountNumber : `xxx${account?.accountNumber.slice(account?.accountNumber.length - 4, account?.accountNumber.length)}`}</button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        TRANSACTIONS
                    </div>
                    <div className="px-4 text-[13px] text-[#666D80]">
                        {transactions && transactions.length !== 0 ? transactions.map((transaction: TransactionData, index: number) => (
                            <div key={index}>{transaction.transactionID}</div>
                        )) : "No transactions found from this account." }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAccountTransactionsComponent;