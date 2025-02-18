import { useState } from "react";
import { RiArrowGoForwardLine, RiFilter3Line, RiSearchLine } from "react-icons/ri";
import MainTransactionDetailsComponent from "./MainTransactionDetailsComponent";
import MainTransactionFilterForm from "./MainTransactionFilterForm";

const MainTransactionsComponent = () => {

    const [selected, setSelected] = useState(1);
    const [visibleTransactionDetails, setVisibleTransactionDetails] = useState(false);
    const [visibleTransactionFilterForm, setVisibleTransactionFilterForm] = useState(false);

    const handleTransactionDetails: () => void = () => {
        setVisibleTransactionDetails(!visibleTransactionDetails);
    }

    const handleTransactionFilter: () => void = () => {
        setVisibleTransactionFilterForm(!visibleTransactionFilterForm);
    }

    return (
        <div className="flex w-full h-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="flex gap-3 items-center justify-between text-[14px]">
                <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                    <RiSearchLine className="text-[16px]"/>
                    <input className="focus:outline-none" placeholder="Search"/>
                </div>
                <button className="flex items-center gap-2 text-[13px]  border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer"><RiArrowGoForwardLine className="text-[14px]"/> Export</button>
            </div>
            <div className="flex flex-col border-[#DFE1E7] border-2 rounded-xl h-full p-3">
                <div className="flex flex-col gap-2 lg:flex-row justify-between lg:items-center">
                    <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] ">
                        <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-10 py-2 text-black" : "px-10 py-2"}`}>All</button>
                        <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Income</button>
                        <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-6 py-2 text-black" : "px-6 py-2"}`}>Expense</button>
                    </div>
                    <div className="flex s gap-3 text-[14px]">
                        <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                            <RiSearchLine className="text-[16px]"/>
                            <input className="focus:outline-none" placeholder="Search transaction"/>
                        </div>
                        <button onClick={handleTransactionFilter} className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                            <RiFilter3Line className="text-[16px]"/>
                            Filter
                        </button>
                    </div>
                </div>
            </div>
            {(visibleTransactionDetails || visibleTransactionFilterForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainTransactionDetailsComponent isVisible={visibleTransactionDetails} onClose={handleTransactionDetails} />
            <MainTransactionFilterForm isVisible={visibleTransactionFilterForm} onClose={handleTransactionFilter} />
        </div>
    );
}

export default MainTransactionsComponent;