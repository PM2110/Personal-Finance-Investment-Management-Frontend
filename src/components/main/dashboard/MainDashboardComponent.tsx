import { useState } from "react";
import DashboardSpendingCardComponent from "../mainComponents/DashboardSpendingCardComponent";
import DashboardNewsCardComponent from "../mainComponents/DashboardNewsCardComponent";
import { MdAccountBalance } from "react-icons/md";
import { AccountData } from "../../../redux/accountSlice";
import { useSelector } from "react-redux";
import BarChartComponent from "../mainComponents/BarChatComponent";
import DashboardHealthScoreComponent from "../mainComponents/DashboardHealthScoreComponent";
import PieChartComponent from "./PieChartComponent";

const MainDashboardComponent: React.FC = () => {
    const [selected, setSelected] = useState(1);

    const accounts: AccountData[] = useSelector((state) => state.account?.data);
    const [selectedAccount, setSelectedAccount] = useState(accounts ? accounts[0] : null);

    const getDuration: () => string = () => {
        switch (selected) {
            case 1:
                return "1y";
            case 2:
                return "6m"
            case 3:
                return "1m";
            case 4:
                return "7d";
            case 5:
                return "24h";
            default:
                return "24h";
        }
    }

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row sm:gap-2 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-[3px] rounded-lg text-[#666D80] text-[13px] ">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>12 M</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>6 M</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>1 M</button>
                    <button onClick={() => setSelected(4)} className={`${selected === 4 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>7 D</button>
                    <button onClick={() => setSelected(5)} className={`${selected === 5 ? "bg-white rounded-lg px-5 py-1 text-black" : "px-5 py-1"} hover:cursor-pointer`}>24 H</button>
                </div>
                <div className="flex justify-between gap-3 text-[13px]">
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                        <MdAccountBalance className="text-[14px]"/>
                        <select onChange={(e) => setSelectedAccount(accounts.filter((account) => account.accountID === Number(e.target.value))[0])} className="focus:outline-none pr-1">
                            {accounts && accounts.length !== 0 && accounts.map((account, index) => (
                                <option key={index} value={account?.accountID}>{account?.accountHolder} (Acc No.: xxx{account?.accountNumber.slice(account?.accountNumber.length - 4)})</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-auto w-full">
                <PieChartComponent accountID={selectedAccount?.accountID || 0} duration={getDuration()}/>
                <DashboardSpendingCardComponent account={selectedAccount} />
                <DashboardNewsCardComponent />
                <DashboardHealthScoreComponent account={selectedAccount} />
                <div className="flex flex-col gap-2 border-[#DFE1E7] col-span-1 sm:col-span-2 xl:col-span-2 border-2 rounded-xl h-[100%] p-2">
                    <div className="h-full overflow-y-auto">
                        {selectedAccount && (
                            <BarChartComponent accountID={selectedAccount?.accountID} duration={getDuration()}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDashboardComponent;
