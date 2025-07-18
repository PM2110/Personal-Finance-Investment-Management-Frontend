import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { PiMoneyFill } from "react-icons/pi";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BudgetData } from "../../../redux/budgetSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { getCurrency, getFlag } from "../../currency";
import { AccountData } from "../../../redux/accountSlice";

interface DashboardBalanceCardComponentProps {
    account: AccountData | null
}

const DashboardBalanceCardComponent: React.FC<DashboardBalanceCardComponentProps> = ({ account }) => {

    const navigate = useNavigate();
    const budget: BudgetData[] = useSelector((state) => state.budget.data).filter((budget: BudgetData) => budget.accountID === account.accountID);
    const [selectedBudget, setSelectedBudget] = useState<BudgetData | null>(budget ? budget[0] : null);
    const growth = true;

    useEffect(() => {
        setSelectedBudget(budget[0])
    }, [account])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedBudget(budget.filter((bud: BudgetData) => bud.budgetID === Number(e.target.value))[0]);
    }

    if(!budget || budget.length === 0){
        return (<div className="flex items-center justify-center text-[#666D80] border-[#DFE1E7] border-2 rounded-xl">No Budget Found.</div>)
    }

    return (
        <div className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-xl text-[14px] p-3 h-fit">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-[14px]">
                        <PiMoneyFill className="text-[16px]"/>
                        {selectedBudget?.budgetCategory}
                </div>
                <select onChange={handleChange} className="flex items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                    {budget && budget.length !== 0
                     ? budget.map((singBalance: BudgetData, index: number) => (
                        <option key={index} value={singBalance.budgetID}>{singBalance.budgetCategory}</option>
                     ))
                     : "No Balance Found"}
                </select>
            </div>
            <div className="flex flex-col gap-3 border-[#DFE1E7] border-2 rounded-xl">
                <div className="flex gap-2 items-center text-[13px] bg-[#F6F8FA] p-4 rounded-t-xl">
                    <div className="h-5 w-5">
                        {getFlag(selectedBudget?.currency || "")}
                    </div>
                    {selectedBudget?.currency}
                </div>
                <div className="flex items-center justify-center gap-1 text-[22px]">
                    {getCurrency(selectedBudget?.currency || "")}
                    {selectedBudget?.spent}
                </div>
                <div className={`flex justify-between ${growth ? "bg-[#EFFEFA] text-[#28806F]" : "bg-[#feefef] text-[#802828]"} text-[13px] w-full px-4 py-2 rounded-b-xl`}>
                    15.43% Than last month
                    {growth ? <FiTrendingUp className="text-[14px]" /> : <FiTrendingDown className="text-[14px]"/>}
                </div>
            </div>
            <div className="flex gap-4 text-[14px]">
                <button onClick={() => navigate('/sendMoney')} className="flex gap-2 justify-center items-center bg-black text-white w-full border-black border-2 rounded-lg py-[6px] hover:cursor-pointer">
                    <RiArrowRightUpLine className=" text-[15px]"/>
                    Send 
                </button>
                <button className="flex gap-2 justify-center items-center w-full border-[#DFE1E7] border-2 rounded-lg py-[6px] hover:cursor-pointer">
                    <RiArrowLeftDownLine className=" text-[15px]"/>
                    Request
                </button>
            </div>
        </div>
    );
}

export default DashboardBalanceCardComponent;