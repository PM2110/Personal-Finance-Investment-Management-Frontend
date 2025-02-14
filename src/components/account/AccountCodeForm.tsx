import { RiPhoneLockFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getConstant } from "../constants";

const AccountCodeForm = () => {

    const lang: string = "en";

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiPhoneLockFill className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[4px]">
                <div className="font-bold text-[20px] text-center">
                    {getConstant("ENTER6DIGCODE", lang)}
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    <div className="flex gap-2">
                        {getConstant("WESENDITTO", lang)}+91-9988776655.
                        <Link to="/" className="underline text-black">{getConstant("CHANGE", lang)}</Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col text-[14px] gap-1">
                <label className="font-bold">{getConstant("YOUR6DIGCODE", lang)}</label>
                <input type="tel" className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none text-[#666D80] py-1 px-2"/>
            </div>
            <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                {getConstant("SUBMIT", lang)}
            </button>
            <Link to="/" className="underline text-[13px] font-bold">{getConstant("DIDNTRECCODE", lang)}</Link>
        </div>
    );
}

export default AccountCodeForm;