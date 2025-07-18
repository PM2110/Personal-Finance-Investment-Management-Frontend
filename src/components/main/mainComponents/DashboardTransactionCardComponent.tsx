import { useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { RiArrowRightSLine, RiArrowRightUpLine } from "react-icons/ri";

interface DashboardTransactionCardComponentProps {
    setPage: (page: number) => void,
}

const DashboardTransactionCardComponent: React.FC<DashboardTransactionCardComponentProps> = ({ setPage }) => {

    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-col gap-2 p-3 border-[#DFE1E7] border-2 rounded-xl h-fit">
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-2 text-[14px] ">
                    <GrTransaction />
                    Recent Transactions
                </div>
                <select className="text-[13px] min-w-[95px] border-[#DFE1E7] border-2 px-2 py-1 rounded-xl">
                    <option value={"Last Week"}>Last Week</option>
                    <option value={"Last Month"}>Last Month</option>
                    <option value={"Last 3 Months"}>Last 3 Months</option>
                    <option value={"Last 6 Months"}>Last 6 Months</option>
                    <option value={"Last Year"}>Last Year</option>
                </select>
            </div>
            <div className="w-full justify-evenly ml-auto flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[13px] ">
                <button onClick={() => setSelected(1)} className={`w-1/3 ${selected === 1 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>Income</button>
                <button onClick={() => setSelected(2)} className={`w-1/3 ${selected === 2 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>Outcome</button>
                <button onClick={() => setSelected(3)} className={`w-1/3 ${selected === 3 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>Pending</button>
            </div>
            <div className="bg-[#DFE1E7] h-[1px]"></div>
            <div className="flex justify-between text-[13px]">
                <div className="flex gap-4">
                    <div className="text-[26px] border-[#DFE1E7] border-2 p-2 w-[40px] h-[40px] rounded-full">
                        <img src="./Netflix.png"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="">
                            Netflix
                        </div>
                        <div className="text-[#818898] text-[13px]">
                            Monthly Netflix subscription
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col justify-between">
                        <div>
                            $ 3,839.91
                        </div>
                        <div className="text-[#818898]">
                            06/27
                        </div>
                    </div>
                    <RiArrowRightSLine className="text-[16px]  text-black"/>
                </div>
            </div>
            <div className="bg-[#DFE1E7] h-[1px]"></div>
            <div className="flex justify-between text-[13px]">
                <div className="flex gap-4">
                    <div className="text-[26px] border-[#DFE1E7] border-2 p-2 w-[40px] h-[40px] rounded-full">
                        <img src="./Youtube.png" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="">
                            Youtube Premium
                        </div>
                        <div className="text-[#818898] text-[13px]">
                            Monthly Youtube subscription
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col justify-between">
                        <div>
                            $ 8,246.63
                        </div>
                        <div className="text-[#818898]">
                            06/27
                        </div>
                    </div>
                    <RiArrowRightSLine className="text-[16px]  text-black"/>
                </div>
            </div>
            <div className="bg-[#DFE1E7] h-[1px]"></div>
            <button onClick={() => setPage(4)} className="flex gap-3 w-full text-[14px] items-center justify-center border-[#DFE1E7] border-2 p-[6px] rounded-lg hover:cursor-pointer">See All <RiArrowRightUpLine /></button>
        </div>
    );
}

export default DashboardTransactionCardComponent;