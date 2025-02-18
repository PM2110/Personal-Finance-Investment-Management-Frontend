import { RiCloseLine, RiMoneyDollarCircleFill, RiWallet3Fill } from "react-icons/ri";

interface MainBalanceAddFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainBalanceAddForm: React.FC<MainBalanceAddFormProps> = ({ isVisible, onClose }) => {
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Balance</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        SELECT TYPE
                    </div>
                    <div className="px-4 flex flex-col gap-4">
                        <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                            <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                                <RiMoneyDollarCircleFill className="text-[16px]" />
                            </div>
                            <div className="w-full">
                                <div className=" flex justify-between">
                                    Balance
                                    <input type="checkbox"/>
                                </div>
                                <div className="text-[12px] text-[#666D80]">
                                    Send, receive and spend money.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                            <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                                <RiWallet3Fill className="text-[16px]" />
                            </div>
                            <div className="w-full">
                                <div className=" flex justify-between">
                                    Pocket
                                    <input type="checkbox"/>
                                </div>
                                <div className="text-[12px] text-[#666D80]">
                                    Set aside moneyfor whenever you need
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        SELECT CURRENCY
                    </div>
                    <div className="p-4 w-full">
                        <select className="w-full border-[#DFE1E7] border-2 rounded-lg p-2">
                        </select>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-auto">
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default MainBalanceAddForm;