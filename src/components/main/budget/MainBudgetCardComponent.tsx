import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { PiMoneyFill } from "react-icons/pi";
import { BudgetData } from "../../../redux/budgetSlice";
import { getCurrency, getFlag } from "../../currency";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

interface MainBudgetCardComponentProps {
    budget: BudgetData,
    setSelectedBudget: (budget: BudgetData) => void;
    handleVisible: () => void;
}

const MainBudgetCardComponent: React.FC<MainBudgetCardComponentProps> = ({ budget, setSelectedBudget, handleVisible }) => {
    
    const growth = true;
    
    return (
        <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl text-[14px] p-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center ">
                        <PiMoneyFill className="text-[16px]"/>
                        {budget.budgetCategory}
                </div>
                <div className="flex flex-row gap-3">
                    <button className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
                        <MdOutlineModeEditOutline className="text-[16px]" />
                        <div>
                            Edit
                        </div>
                    </button>
                    <button className="flex flex-row justify-center items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-lg hover:cursor-pointer">
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
                    {getCurrency(budget.currency)}
                    {budget.spent}
                </div>
                <div className={`flex justify-between ${growth ? "bg-[#EFFEFA] text-[#28806F]" : "bg-[#feefef] text-[#802828]"} w-full px-4 py-2 rounded-b-xl`}>
                    15.43% Than last month
                    {growth ? <FiTrendingUp /> : <FiTrendingDown />}
                </div>
            </div>
            <button onClick={() => { setSelectedBudget(budget); handleVisible(); }} className="w-full border-[#DFE1E7] border-2 rounded-lg py-2  hover:cursor-pointer">Open</button>
        </div>
    );
}

export default MainBudgetCardComponent;