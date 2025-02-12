import { IN } from "country-flag-icons/react/1x1";

const SendMoneyPersonalDetailsForm = () => {

    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className="w-[400px] border-[#DFE1E7] border-2 rounded-xl p-2 text-[14px]">
            <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1 text-[12px]">
                    <label className="">
                        Full Name
                    </label>
                    <div className="flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Enter your name"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1 text-[12px]">
                    <label className="">
                        Date of birth
                    </label>
                    <div className="flex gap-2 text-[#666D80]">
                        <input
                            type="number"
                            className="w-1/3 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                        />
                        <select className="w-1/3 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1">
                            {months.map((month, index) => (
                                <option value={month} key={index}>{month}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            className="w-1/3 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col text-[14px] gap-1">
                    <label className="">Phone Number</label>
                    <div className="flex gap-2 border-[#DFE1E7] border-2 rounded-lg w-full">
                        <div className="flex items-center bg-[#] pr-2">
                            <IN className="p-2 h-8 w-8 rounded-full" />
                            +91
                        </div>
                        <input type="tel" className="w-full focus:outline-none text-[#666D80]" />
                    </div>
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
                <div className="w-full flex flex-col gap-1 text-[12px]">
                    <label className="">
                        ZIP Code
                    </label>
                    <div className="w-full flex gap-2 text-[#666D80]">
                        <input
                            type="text"
                            className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            placeholder="Enter your zip code"
                        />
                    </div>
                </div>
                <div className="h-[1px] bg-[#DFE1E7]"></div>
                <button className="bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                    Continue
                </button>
            </div>

        </div>
    );
}

export default SendMoneyPersonalDetailsForm;