import { GoInfo } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RiPieChart2Line } from "react-icons/ri";
import GaugeChartComponent from "./GaugeChartComponent";

const DashboardSpendingCardComponent = () => {
    const spentPercentage = 0.6;

    return (
        <div className="flex flex-col gap-4 border-[#DFE1E7] border-2 rounded-xl h-auto p-3">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-[14px] font-bold">
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
            <div className="border-[#DFE1E7] border-2 h-[1px]"></div>
            <div className="flex justify-center">
                <GaugeChartComponent percentage={spentPercentage} />
            </div>
            <div className="border-[#DFE1E7] border-2 h-[1px]"></div>
            <div className="flex justify-between items-center rounded-lg p-2 bg-[#F0FBFF] text-[#116B97] text-[13px]">
                <div>
                    Your weekly spending limit is <b> $2000 </b>
                </div>
                <GoInfo className="font-bold text-[13px]"/>
            </div>
        </div>
    );
}

export default DashboardSpendingCardComponent;