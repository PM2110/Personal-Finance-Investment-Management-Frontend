import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SendMoneyReviewForm = () => {

    const [selected, setSelected] = useState(1);

    return (
        <div className="flex flex-col gap-3 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl p-4 border-2">
            <div className="w-full flex gap-3 justify-start text-[14px]">
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                    <div className="bg-white p-[10px] rounded-full">
                        <RiTeamFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
                    </div>
                </div>
                <div className="flex gap-2 p-2 items-center justify-between min-w-full text-[16px]">
                    Send to Manan Patel
                </div>
            </div>
            <div className="w-[396px] flex justify-between mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                <div>
                    TRANSFER DETAILS
                </div>
                <Link to="/sendMoney" className="underline text-[12px] text-black">Edit</Link>
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
                <div className="w-full flex justify-between">
                    <div>
                        Total amount we'll convert
                    </div>
                    <div>
                        0.1 USD
                    </div>
                </div>
                <div className="w-full flex justify-between font-bold">
                    <div>
                        Recipient Gets
                    </div>
                    <div>
                        100 USD
                    </div>
                </div>
            </div>
            <div className="w-[396px] flex justify-between mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                <div>
                    RECIPIENT DETAILS
                </div>
                <Link to="/sendMoney" className="underline text-[12px] text-black">Change</Link>
            </div>
            <div className="flex flex-col gap-1 w-full text-[12px] text-[#666D80]">
                <div className="w-full flex justify-between">
                    <div>
                        Name
                    </div>
                    <div>
                        Manan Patel
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        Email
                    </div>
                    <div>
                        pmpatelmanan21@gmail.com
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        Bank Name
                    </div>
                    <div>
                        BOI (Bank Of India)
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        Account Number
                    </div>
                    <div>
                        21100811
                    </div>
                </div>
            </div>
            <div className="w-[396px] flex justify-between mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                <div>
                    REFERENCE TO RECIPIENTS (OPTIONAL)
                </div>
                <Link to="/sendMoney" className="underline text-[12px] text-black">Add</Link>
            </div>
            <div className="flex flex-col gap-1 w-full text-[12px] text-[#666D80]">
                You can cancel your purchase within 30 minutes of payment for a full refund. Your satisfaction is our priority, and we aim to make the process hassle-free. Just let us know within the timeframe, and we will handle the rest.
            </div>
            <div className="w-full flex gap-2 text-[14px] justify-start text-[#666D80]">
                <input type="checkbox" />
                <div>
                    I accept the <Link to="" className="underline text-[13px] text-black font-bold">Terms of Use</Link> and <Link to="" className="underline text-[13px] text-black font-black">Privacy Policy</Link>
                </div>
            </div>
            <div className="w-full my-[2px] h-[1px] bg-[#DFE1E7]"></div>
            <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:cursor-pointer hover:text-black rounded-lg">
                Confirm and Pay
            </button>
        </div>
    );
}

export default SendMoneyReviewForm;