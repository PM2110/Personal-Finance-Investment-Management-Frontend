import { FaUserCircle } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { RiArrowRightSLine, RiBankFill, RiSearchLine } from "react-icons/ri";

const MainRecipientsComponent = () => {
    return (
        <div className="flex w-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="flex gap-3 items-center text-[14px]">
                <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                    <RiSearchLine className="text-[16px]"/>
                    <input className="focus:outline-none" placeholder="Search"/>
                </div>
                <button className="flex items-center gap-2 border-[#DFE1E7] border-2 px-4 py-2 rounded-lg hover:cursor-pointer">
                    <IoAddOutline className="text-[16px]"/>
                    Add a Recipient
                </button>
            </div>
            <div className="w-full flex flex-col gap-4 border-[#DFE1E7] border-2 text-[13px] md:text-[14px] lg:text-[15px] rounded-lg p-3">
                <div className="flex justify-between items-center">
                    <div className="">
                        Your Accounts
                    </div>
                    <button className="flex items-center gap-2 text-[12px]  border-[#DFE1E7] border-2 px-3 py-1 rounded-lg hover:cursor-pointer">
                        <IoAddOutline className="text-[14px]"/>
                        Add
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-[13px] lg:text-[14px] ">
                        <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                            <div className="bg-white p-[10px] rounded-full">
                                <RiBankFill className="text-[16px]" />
                            </div>
                        </div>
                        <div>
                            Add one of your bank account
                        </div>
                    </div>
                    <button className="text-[12px]  hover:cursor-pointer">
                        <RiArrowRightSLine className="text-[22px] text-black"/>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 border-[#DFE1E7] border-2 text-[13px] md:text-[14px] lg:text-[15px] rounded-lg p-3">
                <div className="flex justify-between items-center">
                    <div className="">
                        Your Recipients
                    </div>
                    <button className="flex items-center gap-2 text-[12px]  border-[#DFE1E7] border-2 px-3 py-1 rounded-lg hover:cursor-pointer">
                        <IoAddOutline className="text-[14px]"/>
                        Add
                    </button>
                </div>
                <div className="flex w-full flex-col gap-3 justify-between items-center">
                    <div className="flex w-full justify-between">
                        <div className="flex items-center gap-2 text-[13px] lg:text-[14px] ">
                            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[5px] rounded-full">
                                <FaUserCircle className="text-[20px]"/>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    Manan Patel
                                </div>
                                <div className="text-[#818898] text-[12px] lg:text-[13px]">
                                    USD Account ending with 1289
                                </div>
                            </div>
                        </div>
                        <button className="text-[12px]  hover:cursor-pointer">
                            <RiArrowRightSLine className="text-[22px] text-black"/>
                        </button>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-3 justify-between items-center">
                    <div className="flex w-full justify-between">
                        <div className="flex items-center gap-2 text-[13px] lg:text-[14px] ">
                            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[5px] rounded-full">
                                <FaUserCircle className="text-[20px]"/>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    Manan Patel
                                </div>
                                <div className="text-[#818898] text-[12px] lg:text-[13px]">
                                    USD Account ending with 1289
                                </div>
                            </div>
                        </div>
                        <button className="text-[12px]  hover:cursor-pointer">
                            <RiArrowRightSLine className="text-[22px] text-black"/>
                        </button>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-3 justify-between items-center">
                    <div className="flex w-full justify-between">
                        <div className="flex items-center gap-2 text-[13px] lg:text-[14px] ">
                            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[5px] rounded-full">
                                <FaUserCircle className="text-[20px]"/>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    Manan Patel
                                </div>
                                <div className="text-[#818898] text-[12px] lg:text-[13px]">
                                    USD Account ending with 1289
                                </div>
                            </div>
                        </div>
                        <button className="text-[12px]  hover:cursor-pointer">
                            <RiArrowRightSLine className="text-[22px] text-black"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainRecipientsComponent;