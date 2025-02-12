import { IN } from "country-flag-icons/react/1x1";
import { RiPhoneFill } from "react-icons/ri";

const AccountPhoneForm = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiPhoneFill className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
                <div className="font-bold text-[20px] text-center">
                    Your country of primary residence
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    You can add another account later on, too.
                </div>
            </div>
            <div className="w-full flex flex-col text-[14px] gap-1">
                <label className="font-bold">Phone Number</label>
                <div className="flex gap-2 border-[#DFE1E7] border-2 rounded-lg w-full">
                    <div className="flex items-center bg-[#DFE1E7] pr-2">
                        <IN className="p-2 h-8 w-8 rounded-full"/>
                        +91
                    </div>
                    <input type="tel" className="w-full focus:outline-none text-[#666D80]"/>
                </div>
            </div>
            <button className="mt-3 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                Continue
            </button>
        </div>
    );
}

export default AccountPhoneForm;