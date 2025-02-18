import { BiDollar } from "react-icons/bi";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { PiMoneyFill } from "react-icons/pi";
import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";

interface DashboardBalanceCardComponentProps {
    balanceNumber: string,
    balance: number,
    flag: React.ReactNode,
    currency: string,
    growth: boolean
}

const DashboardBalanceCardComponent: React.FC<DashboardBalanceCardComponentProps> = ({ balanceNumber, balance, flag, currency, growth }) => {
    return (
        <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl text-[14px] p-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center ">
                        <PiMoneyFill className="text-[16px]"/>
                        {balanceNumber}
                </div>
                <button className="flex items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-xl hover:cursor-pointer">
                    <LuSettings />
                    <div>
                        More Options
                    </div>
                </button>
            </div>
            <div className="flex flex-col gap-3 border-[#DFE1E7] border-2 rounded-xl">
                <div className="flex gap-2 items-center  bg-[#F6F8FA] p-4 rounded-t-xl">
                    <div className="h-8 w-8">
                        {flag}
                    </div>
                    {currency}
                </div>
                <div className="flex items-center justify-center gap-1  text-[32px]">
                    <BiDollar />
                    {balance}
                </div>
                <div className={`flex justify-between ${growth ? "bg-[#EFFEFA] text-[#28806F]" : "bg-[#feefef] text-[#802828]"} w-full px-4 py-2 rounded-b-xl`}>
                    15.43% Than last month
                    {growth ? <FiTrendingUp /> : <FiTrendingDown />}
                </div>
            </div>
            <div className="flex gap-4">
                <button className="flex gap-2 justify-center items-center bg-black text-white w-full border-[#DFE1E7] border-2 rounded-lg py-2  hover:cursor-pointer">
                    <RiArrowRightUpLine className=" text-[17px]"/>
                    Send 
                </button>
                <button className="flex gap-2 justify-center items-center w-full border-[#DFE1E7] border-2 rounded-lg py-2  hover:cursor-pointer">
                    <RiArrowLeftDownLine className=" text-[17px]"/>
                    Request
                </button>
            </div>
        </div>
    );
}

export default DashboardBalanceCardComponent;