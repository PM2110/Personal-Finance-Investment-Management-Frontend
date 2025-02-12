import { RiFlagFill } from "react-icons/ri";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

const AccountCountryForm = () => {

    const [select, setSelect] = useState("IN");
    const onSelect = (code: string) => setSelect(code);

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiFlagFill className="text-[16px]" />
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
                <label className="font-bold">Choose Country</label>
                <ReactFlagsSelect
                    selected={select}
                    onSelect={onSelect}
                    countries={["fi", "GB", "US", "IN"]}
                    className="w-full"
                />
            </div>
            <button className="mt-3 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                Continue
            </button>
        </div>
    );
};

export default AccountCountryForm;
