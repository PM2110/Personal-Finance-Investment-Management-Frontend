import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { AccountData } from "../../../redux/accountSlice"
import { getCurrency, getFlag } from "../../currency";
import { useState } from "react";

interface MainAccountCardComponentProps {
    account: AccountData,
    setSelectedAccount: (account: AccountData) => void,
    handleVisibleEdit: () => void,
    handleDelete: (accountID: number) => void,
}

const getColor: (accountType: string) => string = (accountType) => {
    switch (accountType) {
        case "savings":
            return "FFE3B9"
        default:
            return "666D80"
    }
}

const MainAccountCardComponent: React.FC<MainAccountCardComponentProps> = ({ account, setSelectedAccount, handleVisibleEdit, handleDelete }) => {
    
    const [balanceVisible, setBalanceVisible] = useState(false);
    const [numberVisible, setNumberVisible] = useState(false);
    
    return (
        <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl p-3">
            <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl">
                <div className="flex flex-row justify-between items-start bg-[#F6F8FA] p-2 rounded-t-xl">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="w-8 h-8">
                            {getFlag(account.currency)}
                        </div>
                        <div className="flex flex-col justify-between text-[14px]">
                            <div>
                                Account Holder: {account.accountHolder}
                            </div>
                            <div className="flex gap-1 text-[#666D80] text-[13px]">
                                Currency: {account.currency} <div className="flex items-center">({getCurrency(account.currency)})</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <button onClick={() => { setSelectedAccount(account); handleVisibleEdit(); }} className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                            <MdOutlineModeEditOutline className="text-[16px]" />
                            <div>
                                Edit
                            </div>
                        </button>
                        <button onClick={() => { handleDelete(account.accountID); }} className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                            <MdDeleteOutline className="text-[16px]" />
                            <div>
                                Delete
                            </div>
                        </button>
                    </div>
                </div>
                <button onClick={() => setBalanceVisible(!balanceVisible)} className="flex w-full justify-center items-center text-[32px] hover:cursor-pointer">
                    {getCurrency(account.currency)}
                    <div className="flex">
                        {balanceVisible ? account.balance : `xxxx${account.balance.toString().slice(account.balance.toString().length - 4)}`}
                    </div>
                </button>
                <div className={`flex w-full justify-between p-1 px-4 rounded-b-lg bg-[#${getColor(account.accountType)}] text-[12px] text-[#666D80]`}>
                    <div>
                        Account Type: {account.accountType}
                    </div>
                    <button onClick={() => setNumberVisible(!numberVisible)} className="hover:cursor-pointer">
                        Account Number: {numberVisible ? account.accountNumber : `xxxx${account.accountNumber.slice(account.accountNumber.length - 4)}`}
                    </button>
                </div>
            </div>
            <button className="flex w-full border-[#DFE1E7] border-2 rounded-lg justify-center p-2 text-[#666D80]">
                View Transactions
            </button>
        </div>
    );
}

export default MainAccountCardComponent;