import { FaUserCircle } from "react-icons/fa";
import { RiBriefcaseFill } from "react-icons/ri";

const AccountTypeForm = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <FaUserCircle className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
                <div className="font-bold text-[20px] text-center">
                    What kind of account would you open today?
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    You can add another account later on, too.
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 rounded-lg">
                    <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                        <FaUserCircle className="text-[16px]" />
                    </div>
                    <div className="w-full">
                        <div className="font-bold flex justify-between">
                            Personal
                            <input type="checkbox"/>
                        </div>
                        <div className="text-[12px] text-[#666D80]">
                            Send, spend & receive around the world for less
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 rounded-lg">
                    <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                        <RiBriefcaseFill className="text-[16px]" />
                    </div>
                    <div className="w-full">
                        <div className="font-bold flex justify-between">
                            Business
                            <input type="checkbox"/>
                        </div>
                        <div className="text-[12px] text-[#666D80]">
                            Do business or freelance work internationally
                        </div>
                    </div>
                </div>
                <button className="mt-3 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                        Continue
                    </button>
            </div>
        </div>
    );
}

export default AccountTypeForm;