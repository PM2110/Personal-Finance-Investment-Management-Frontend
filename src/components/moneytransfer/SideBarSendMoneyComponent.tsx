interface SideBarSendMoneyComponentProps {
    selected: number;
    setSelected: (value: number) => void;
}

const SideBarSendMoneyComponent: React.FC<SideBarSendMoneyComponentProps> = ({ selected, setSelected }) => {
    return (
        <div className="bg-[#F6F8FA] font-bold h-screen w-[300px] text-[12px] px-4 py-8 md:w-[350px] md:[text-13px] lg:text-[14px] text-[#818898]">
            <div className="pr-4 sm:pr-7 md:pr-9 lg:pr-11">
                SENDING MONEY PROCESS
            </div>
            <div className="flex flex-col mt-4 gap-2">
                <button onClick={() => setSelected(1)} className={`flex gap-3 items-center ${selected === 1 ? "border-black border-[2px] rounded-full bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                    <div className="border-[#DFE1E7] bg-white border-2 rounded-full px-[7px] py-[1px]">
                        1
                    </div>
                    Amount
                </button>
                <button onClick={() => setSelected(2)} className={`flex gap-3 items-center ${selected === 2 || selected === 2.1 ? "border-black border-[2px] rounded-full bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                    <div className="border-[#DFE1E7] bg-white border-2 rounded-full px-[7px] py-[1px]">
                        2
                    </div>
                    Personal Details
                </button>
                <button onClick={() => setSelected(3)} className={`flex gap-3 items-center ${selected === 3 || selected === 3.1 ? "border-black border-[2px] rounded-full bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                    <div className="border-[#DFE1E7] bg-white border-2 rounded-full px-[7px] py-[1px]">
                        3
                    </div>
                    Recipient
                </button>
                <button onClick={() => setSelected(4)} className={`flex gap-3 items-center ${selected === 4 ? "border-black border-[2px] rounded-full bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                    <div className="border-[#DFE1E7] bg-white border-2 rounded-full px-[7px] py-[1px]">
                        4
                    </div>
                    Review and Pay
                </button>
                <button onClick={() => setSelected(5)} className={`flex gap-3 items-center ${selected === 5 ? "border-black border-[2px] rounded-full bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                    <div className="border-[#DFE1E7] bg-white border-2 rounded-full px-[7px] py-[1px]">
                        5
                    </div>
                    Success
                </button>
            </div>
        </div>
    );
}

export default SideBarSendMoneyComponent;