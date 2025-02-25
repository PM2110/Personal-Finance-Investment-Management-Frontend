import { useState } from "react";
import { RiArrowLeftDownLine, RiArrowRightUpLine, RiFilter3Line } from "react-icons/ri";
import BarChatComponent from "../mainComponents/BarChatComponent";
import DashboardBalanceCardComponent from "../mainComponents/DashboardBalanceCardComponent";
import { US } from "country-flag-icons/react/1x1";
import DashboardSpendingCardComponent from "../mainComponents/DashboardSpendingCardComponent";
import DashboardTransactionCardComponent from "../mainComponents/DashboardTransactionCardComponent";
import { GoCreditCard } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import DashboardNewsCardComponent from "../mainComponents/DashboardNewsCardComponent";

interface MainDashboardComponentProps {
    setPage: (page: number) => void;
}

const MainDashboardComponent = ({ setPage }) => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row sm:gap-2 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-[3px] rounded-lg text-[#666D80] text-[13px] ">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>12 M</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>1 M</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>7 D</button>
                    <button onClick={() => setSelected(4)} className={`${selected === 4 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>24 H</button>
                </div>
                <div className="flex gap-3 text-[13px]">
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-3 py-[6px] rounded-lg">
                        <RiFilter3Line className="text-[15px]"/>
                        Filter
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-auto w-full">
                <DashboardBalanceCardComponent />
                <DashboardSpendingCardComponent />
                <DashboardNewsCardComponent />
                <DashboardTransactionCardComponent setPage={setPage} />
                <div className="flex flex-col gap-2 border-[#DFE1E7] col-span-1 sm:col-span-2 lg:col-span-2 border-2 rounded-xl h-[125%] p-2">
                    <div className="flex h-auto justify-between text-[14px]">
                        <div className="flex gap-2 items-center">
                            <GoCreditCard />
                            Budget Overview
                        </div>
                        <div className="flex gap-3">
                            <div className="flex gap-1 items-center text-[#818898]">
                                <div className="h-2 w-2 bg-[#666D80] rounded-full"></div>
                                Outcome
                            </div>
                            <div className="flex gap-1 items-center text-[#818898]">
                                <div className="h-2 w-2 bg-[#E5EFFF] rounded-full"></div>
                                Income
                            </div>
                            <button className="w-auto min-w-[110px] flex items-center gap-2 border-[#DFE1E7] text-[12px] border-2 p-[8px] rounded-xl hover:cursor-pointer">
                                <LuSettings />
                                <div>
                                    More Options
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                    <div className="m-2 flex gap-4 text-[14px] justify-between text-[#666D80]">
                        <div className="flex w-full flex-row gap-2 items-center">
                            <div className="bg-[#F8F5FF] p-4 rounded-full">
                                <RiArrowLeftDownLine className=" text-black text-[17px]"/>
                            </div>
                            <div className="flex flex-col justify-between">
                                Income
                                <div className="text-black ">
                                    $ 2103,1011
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#DFE1E7] w-[2px]"></div>
                        <div className="flex w-full flex-row gap-2 items-center">
                            <div className="bg-[#E5EFFF] p-4 rounded-full">
                                <RiArrowRightUpLine className=" text-blue-600 text-[17px]"/>
                            </div>
                            <div className="flex flex-col justify-between">
                                Outcome
                                <div className="text-black ">
                                    $ 0321,1110
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full overflow-y-auto">
                        <BarChatComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDashboardComponent;