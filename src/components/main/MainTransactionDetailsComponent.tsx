import { FaUserCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

interface MainTransactionDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void
}

const MainTransactionDetailsComponent: React.FC<MainTransactionDetailsComponentProps> = ({ isVisible, onClose }) => {
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Transaction Details</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        AMOUNT
                    </div>
                    <div className="px-4 flex flex-col gap-4  text-[24px]">
                        $ 21031011
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        TO
                    </div>
                    <div className="w-full flex gap-1 justify-start items-center text-[14px] px-4">
                        <FaUserCircle className="text-[28px]" />
                        <div className="flex flex-col items-start p-2 justify-between text-[16px]">
                            <div className="text-[14px] ">
                                Manan Patel
                            </div>
                            <div className="flex gap-1 text-[10px]  text-[#666D80]">
                                <div className="font-semibold tracking-widest">•••••••2392</div>
                                <div className="text-[#818898]">•</div>
                                <div className="font-semibold tracking-wide">BOI (Bank Of India)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        DETAILS
                    </div>
                    <div className="w-full flex flex-col gap-4 text-[14px] px-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Payment Method
                            </div>
                            <div className="">
                                Money Transfer
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Transaction ID
                            </div>
                            <div className="">
                                YTR21031011
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Date & Time
                            </div>
                            <div className="">
                                Jan 19, 2023 at 20:20
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Fees
                            </div>
                            <div className="">
                                $ 21.03
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 p-4 mt-auto">
                <button className="mt-1 text-[15px] w-full py-[6px]  border-[#DFE1E7] border-2 hover:cursor-pointer rounded-lg">
                    Repeat
                </button>
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Share
                </button>
            </div>
        </div>
    );
}

export default MainTransactionDetailsComponent;