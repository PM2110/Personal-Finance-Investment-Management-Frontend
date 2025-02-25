import { EU, SG, US } from "country-flag-icons/react/1x1";
import { useEffect, useState } from "react";
import { RiFilter3Line } from "react-icons/ri";
import MainBalanceCardComponent from "./MainBalanceCardComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { BalanceData, fetchBalance } from "../../../redux/balanceSlice";
import MainBalanceDetailsComponent from "./MainBalanceDetailsComponent";

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

    const dispatch = useDispatch<AppDispatch>();
    const [selected, setSelected] = useState(1);
    const { userID } = useSelector((state) => state.user.data);
    const balanceList = useSelector((state) => state.balance.data);

    const [selectedBalance, setSelectedBalance] = useState<BalanceData>();
    const [visibleMainBalanceDetails, setVisibleMainBalanceDetails] = useState(false);

    useEffect(() => {
        dispatch(fetchBalance(userID));
    }, [dispatch, userID])

    const handleVisibleMainBalance: () => void = () => {
        setVisibleMainBalanceDetails(!visibleMainBalanceDetails);
    }

    return (
        <div className="w-full flex flex-col gap-4 overflow-y-hidden">
            <div className="flex flex-col lg:flex-row sm:gap-4 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] ">
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
                    {balanceList.map((balance: BalanceData, index: number) => (
                        <MainBalanceCardComponent key={index} balance={balance} setSelectedBalance={setSelectedBalance} handleVisible={handleVisibleMainBalance} />
                    ))}
                </div>
            </div>
            {(visibleMainBalanceDetails) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainBalanceDetailsComponent isVisible={visibleMainBalanceDetails} onClose={handleVisibleMainBalance} balance={selectedBalance}/>
        </div>
    );
}

export default MainBalanceComponent;