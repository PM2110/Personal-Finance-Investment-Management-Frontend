import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SendMoneySuccessForm = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl p-4 border-2">
            <div className="bg-gradient-to-b border-[#DFE1E7] border-2 from-gray-300 via-gray-200 to-white p-[15px] rounded-full">
                <div className="bg-white border-[#DFE1E7] border-2 p-[18px] flex items-center justify-center rounded-full w-24 h-24">
                    <img src="/Success.png" alt="Logo" className="w-auto h-auto" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
                <div className="font-bold text-[20px]">
                    Transaction Successful
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    Hooray, Your transaction is successful
                </div>
            </div>
            <div className="w-[396px] flex justify-between mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                <div>
                    TRANSFER DETAILS
                </div>
                <Link to="/sendMoney" className="underline text-[12px] text-black">Edit</Link>
            </div>
            <div className="w-full flex gap-1 justify-start items-center text-[14px]">
                <FaUserCircle className="text-[28px] md:text-[17px] lg:text-[18px]" />
                <div className="flex flex-col items-start p-2 justify-between text-[16px]">
                    <div className="text-[14px] font-bold">
                        Manan Patel
                    </div>
                    <div className="flex gap-1 text-[10px]  text-[#666D80]">
                        <div className="font-semibold tracking-widest">•••••••2392</div>
                        <div className="text-[#818898]">•</div>
                        <div className="font-semibold tracking-wide">BOI (Bank Of India)</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-full text-[12px] text-[#666D80]">
                <div className="w-full flex justify-between">
                    <div>
                        You send exactly
                    </div>
                    <div>
                        1 USD
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        Total fees (included)
                    </div>
                    <div>
                        0.65 USD
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-4">
                <button className="mt-1 text-[15px] w-full py-[6px] font-bold border-[#DFE1E7] border-2 hover:cursor-pointer rounded-lg">
                    View Transaction
                </button>
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:cursor-pointer rounded-lg">
                    Done
                </button>
            </div>
        </div>
    );
}

export default SendMoneySuccessForm;