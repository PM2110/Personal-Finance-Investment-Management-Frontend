import { GoInfo } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RiPieChart2Line } from "react-icons/ri";
import { CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import { setTransactions, TransactionData } from "../../../redux/transactionSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { getCurrency } from "../../currency";

const DashboardSpendingCardComponent = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { userName } = useSelector((state) => state.user.data);
    const transactions = useSelector((state) => state.transaction.data);
    let spent: number = 0;
    transactions.forEach((transaction: TransactionData) => {
        if(transaction.from === userName){
            spent = Number(Number(spent) + Number(transaction.amount));
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
                    Spending Summary
                </div>
                <button className="w-auto min-w-[110px] flex items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-xl hover:cursor-pointer">
                    <LuSettings />
                    <div>
                        More Options
                    </div>
                </button>
            </div>
            <div className="border-[#DFE1E7] border-1 h-[1px]"></div>
            <div className="flex flex-col items-center justify-center h-20 text-[13px]">
                <CircularProgressbar
                    value={spent / 200}
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
                <div className="flex items-center">
                    Spent: {getCurrency("GBP")}{spent}
                </div>
            </div>
            <div className="border-[#DFE1E7] border-1 h-[1px]"></div>
            <div className="flex justify-between items-center rounded-lg p-2 bg-[#F0FBFF] text-[#116B97] text-[13px]">
                <div className="flex gap-1">
                    Your weekly spending limit is <b className="flex items-center gap-[2px]"> {getCurrency("GBP")}20,000 </b>
                </div>
                <GoInfo className=" text-[13px]"/>
            </div>
        </div>
    );
}

export default DashboardSpendingCardComponent;