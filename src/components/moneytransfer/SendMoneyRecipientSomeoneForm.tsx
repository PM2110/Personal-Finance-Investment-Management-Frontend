import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";

const SendMoneyRecipientSomeoneForm = () => {

    const [transferMethod, setTransferMethod] = useState(1);

    return (
        <div className="flex flex-col gap-3 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl p-4 border-2">
            <div className="w-full flex gap-3 justify-start text-[14px]">
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                    <div className="bg-white p-[10px] rounded-full">
                        <RiTeamFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
                    </div>
                </div>
                <div className="flex gap-2 p-2 items-center justify-between min-w-full text-[16px]">
                    Send to someone else
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex flex-col gap-1 text-[12px]">
                <label className="">
                    Their Email
                </label>
                <div className="flex gap-2 text-[#666D80]">
                    <input
                        type="text"
                        className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
            <div className="w-[396px] mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                BANK DETAILS
            </div>
            <div className="w-full">
                <div className="flex bg-[#DFE1E7] text-[12px] w-full p-[3px] rounded-xl">
                    <button onClick={() => { setTransferMethod(1); }} className={`w-1/2 rounded-lg p-1 ${transferMethod === 1 ? "bg-white" : "text-[#666D80]"}`}>Local Bank Account</button>
                    <button onClick={() => { setTransferMethod(2); }} className={`w-1/2 rounded-lg p-1 ${transferMethod === 2 ? "bg-white" : "text-[#666D80]"}`}>Pay Now</button>
                </div>
                {transferMethod === 1 &&
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex flex-col gap-1 text-[12px]">
                            <label className="">
                                Full name of account holder
                            </label>
                            <div className="flex gap-2 text-[#666D80]">
                                <input
                                    type="number"
                                    className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                    placeholder="Enter name of account holder"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-[12px]">
                            <label className="">
                                Bank Name
                            </label>
                            <div className="flex gap-2 text-[#666D80]">
                                <input
                                    type="number"
                                    className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                    placeholder="Enter bank name"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-[12px]">
                            <label className="">
                                Account Number
                            </label>
                            <div className="flex gap-2 text-[#666D80]">
                                <input
                                    type="number"
                                    className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                    placeholder="Enter your account number"
                                />
                            </div>
                        </div>
                    </div>
                }
                {transferMethod === 2 &&
                    <div className="mt-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-1 text-[12px]">
                            <label className="">
                                You send exactly
                            </label>
                            <div className="flex gap-2 text-[#666D80]">
                                <input
                                    type="number"
                                    className="w-3/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                />
                                <input
                                    type="text"
                                    className="w-1/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-[12px]">
                            <div className="flex justify-between">
                                <div>
                                    Wire transfer fee
                                </div>
                                <div className="mr-2">
                                    0
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    Our fee
                                </div>
                                <div className="mr-2">
                                    0
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-bold">
                                    Total fees
                                </div>
                                <div className="mr-2">
                                    0
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-2 h-[1px] bg-[#DFE1E7]"></div>
                        <div className="flex flex-col gap-1 text-[12px]">
                            <label className="">
                                Recipient gets
                            </label>
                            <div className="flex gap-2 text-[#666D80]">
                                <input
                                    type="number"
                                    disabled
                                    className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="w-[396px] mt-1 bg-[#F6F8FA] text-[#818898] py-3 px-4 text-[13px]">
                RECIPIENT DETAILS
            </div>
            <div className="w-full flex gap-2">
                <div className="w-full flex flex-col gap-1 text-[12px]">
                    <label className="">
                        Country
                    </label>
                    <div className="w-full flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Choose your country"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1 text-[12px]">
                    <label className="">
                        State
                    </label>
                    <div className="w-full flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Enter your state"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-2">
                <div className="w-full flex flex-col gap-1 text-[12px]">
                    <label className="">
                        City
                    </label>
                    <div className="w-full flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Enter your city"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1 text-[12px]">
                    <label className="">
                        Address
                    </label>
                    <div className="w-full flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Enter your address"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full my-[2px] h-[1px] bg-[#DFE1E7]"></div>
            <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:cursor-pointer hover:text-black rounded-lg">
                Continue
            </button>
        </div>
    );
}

export default SendMoneyRecipientSomeoneForm;