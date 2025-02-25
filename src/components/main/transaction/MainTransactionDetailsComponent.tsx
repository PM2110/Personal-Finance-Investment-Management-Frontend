import { FaUserCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { TransactionData } from "../../../redux/transactionSlice";
import { getCurrency } from "../../currency";

interface MainTransactionDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    userName: string,
    handleDelete: () => void,
    transaction: TransactionData | undefined,
}

const MainTransactionDetailsComponent: React.FC<MainTransactionDetailsComponentProps> = ({ isVisible, onClose, userName, handleDelete, transaction }) => {
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
                    <div className="px-4 flex flex-row items-center gap-1 text-[24px]">
                        {transaction?.from === userName ? "-" : ""} {getCurrency(transaction?.currency)} {transaction?.amount}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        {transaction?.to === userName ? "FROM" : "TO"}
                    </div>
                    <div className="w-full flex gap-1 justify-start items-center text-[14px] px-4">
                        <FaUserCircle className="text-[28px]" />
                        <div className="flex flex-col items-start p-2 justify-between text-[16px]">
                            <div className="text-[14px] ">
                                {transaction?.to === userName ? transaction?.from : transaction?.to}
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
                                Transaction Category
                            </div>
                            <div className="">
                                {transaction?.category}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Transaction ID
                            </div>
                            <div className="">
                                {transaction?.transactionID}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Date & Time
                            </div>
                            <div className="">
                                {new Date(transaction?.date).toLocaleString()}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Fees
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                {getCurrency(transaction?.currency)} {transaction?.fees}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 p-4 mt-auto">
                <button onClick={handleDelete} className="mt-1 text-white text-[15px] w-full py-[6px] border-red-500 border-2 bg-red-500 hover:cursor-pointer hover:bg-white hover:text-red-500 rounded-lg">
                    Delete
                </button>
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Share
                </button>
            </div>
        </div>
    );
}

export default MainTransactionDetailsComponent;