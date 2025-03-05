import { GoInfo } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RiPieChart2Line } from "react-icons/ri";
import { CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import { setTransactions, TransactionData } from "../../../redux/transactionSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { getCurrency } from "../../currency";
import { AccountData } from "../../../redux/accountSlice";
import { GetConstant } from "../../constants";

interface DashboardSpendingCardComponentProps {
    account: AccountData | null,
}

const DashboardSpendingCardComponent: React.FC<DashboardSpendingCardComponentProps> = ({ account }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { userName } = useSelector((state) => state.user.data);
    const transactions = useSelector((state) => state.transaction.data).filter((transaction: TransactionData) => transaction.senderAccountID === account?.accountID);
    const { currencyValues, currency } = useSelector((state) => state.userPreference.data);
    const [visibleBalance, setVisibleBalance] = useState(true);
    let show = account?.balance;
    if(currency && account){
        show = Number(account?.balance) / currencyValues[account?.currency];
    }
    
    let spent: number = 0;
    transactions.forEach((transaction: TransactionData) => {
        if(transaction.from === userName){
            if(currency){
                spent = Number(spent) + (Number(transaction.sentAmount) / currencyValues[transaction.sentCurrency]);
            } else {
                spent = Number(spent) + (Number(transaction.sentAmount));
            }
        }
    })

    useEffect(() => {
        dispatch(setTransactions(userName));
    }, [])

    return (
        <div className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl h-fit p-3">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-[14px] ">
                    <RiPieChart2Line />
                    {GetConstant("SPENDING_SUMMARY")}
                </div>
                <button className="w-auto min-w-[110px] flex items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-xl hover:cursor-pointer">
                    <LuSettings />
                    <div>
                        {GetConstant("MORE_OPTIONS")}
                    </div>
                </button>
            </div>
            <div className="border-[#DFE1E7] border-1 h-[1px]"></div>
            <div className="flex flex-col items-center justify-center h-40 text-[13px]">
                <div className="h-fit w-4/5 mt-42">
                    <CircularProgressbar
                        value={(spent * 100) / (show || 1)}
                        circleRatio={0.5}
                        strokeWidth={18}
                        styles={{
                            root: {
                                transform: "rotate(0.75turn)"
                            },
                            path: { stroke: "black", strokeLinecap: "butt" },
                            trail: { stroke: "#C4C4C4", strokeLinecap: "butt" },
                        }}
                    />
                </div>
                
            </div>
            <div className="flex h-auto items-center justify-center w-full -mt-8">
                {GetConstant("SPENT")}: {currency ? getCurrency(currency) : getCurrency(account?.currency || "")}{Number(spent).toFixed(2)}
            </div>
            <div className="border-[#DFE1E7] border-1 h-[1px] mt-2"></div>
            <div className="flex justify-between items-center rounded-lg p-2 bg-[#F0FBFF] text-[#116B97] text-[13px]">
                <div className="flex gap-1">
                    {GetConstant("ACCOUNT_BALANCE")} <button onClick={() => setVisibleBalance(!visibleBalance)} className="flex items-center gap-[2px] hover:cursor-pointer"> {currency ? getCurrency(currency) : getCurrency(account?.currency || "")} {visibleBalance ? show : `xxxx${show?.toString().slice(show?.toString().length - 4)}` } </button>
                </div>
                <GoInfo className=" text-[13px]"/>
            </div>
        </div>
    );
}

export default DashboardSpendingCardComponent;
