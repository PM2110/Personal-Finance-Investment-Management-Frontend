import { EU, SG, US } from "country-flag-icons/react/1x1";
import { useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import MainBalanceCardComponent from "./MainBalanceCardComponent";

interface BalanceDataType {
    balanceNumber: string,
    balance: number,
    growth: boolean,
    flag: React.ReactNode,
    currency: string
}

interface MainBalanceComponent {
    isVisible: string,
    onClose: () => void
}

const MainBalanceComponent = () => {

    const [selected, setSelected] = useState(1);

    const balanceData: BalanceDataType[] = [
        { balanceNumber: "First Balance", balance: 8475300, growth: true, flag: <US className="rounded-full" />, currency: "United States Dollar (USD)" },
        { balanceNumber: "Second Balance", balance: 6732440, growth: false, flag: <SG className="rounded-full" />, currency: "Singapore Dollar (SGD)" },
        { balanceNumber: "Third Balance", balance: 9833100, growth: true, flag: <EU className="rounded-full" />, currency: "Euro (EUR)" },
    ]

    return (
        <div className="w-full flex flex-col gap-4 overflow-y-hidden">
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
            <div className="max-h-full w-full overflow-y-auto p-2">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                    {balanceData.map((balance, index) => (
                        <MainBalanceCardComponent key={index} balanceNumber={balance.balanceNumber} balance={balance.balance} growth={balance.growth} flag={balance.flag} currency={balance.currency} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainBalanceComponent;