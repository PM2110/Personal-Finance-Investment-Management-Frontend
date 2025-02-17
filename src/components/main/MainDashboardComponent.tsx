import { useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import BarChatComponent from "../BarChatComponent";
import DashboardBalanceCardComponent from "./mainComponents/DashboardBalanceCardComponent";
import { US } from "country-flag-icons/react/1x1";
import DashboardSpendingCardComponent from "./mainComponents/DashboardSpendingCardComponent";
import DashboardTransactionCardComponent from "./mainComponents/DashboardTransactionCardComponent";

const MainDashboardComponent = () => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row sm:gap-4 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] font-bold">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>12 M</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>1 M</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>7 D</button>
                    <button onClick={() => setSelected(4)} className={`${selected === 4 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"} hover:cursor-pointer`}>24 H</button>
                </div>
                <div className="flex gap-3 text-[14px]">
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                        <RiFilter3Line className="text-[16px]"/>
                        Filter
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-auto w-full">
                <DashboardBalanceCardComponent growth={true} balance={21031011} balanceNumber="My Balance" flag={<US className="rounded-full"/>} currency="United States Dollar (USD)" />
                <DashboardSpendingCardComponent />
                <div className="border-[#DFE1E7] border-2 h-full rounded-xl">Grid 3</div>
                <DashboardTransactionCardComponent />
                <div className="border-[#DFE1E7] col-span-1 sm:col-span-2 lg:col-span-2 border-2 rounded-xl h-full">
                    <div className="h-full">
                        <BarChatComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDashboardComponent;