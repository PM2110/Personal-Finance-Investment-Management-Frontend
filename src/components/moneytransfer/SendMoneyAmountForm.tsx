import { useState } from "react";

const SendMoneyAmountForm = () => {
    const [selected, setSelected] = useState(1);
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("USD");

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    return (
        <div className="w-[400px] border-[#DFE1E7] border-2 rounded-lg p-2 text-[14px]">
            <div className="flex bg-[#DFE1E7] font-bold w-full p-[3px] rounded-lg">
                <button onClick={() => { setSelected(1); setAmount(0); }} className={`w-1/2 rounded-lg p-1 ${selected === 1 ? "bg-white" : "text-[#666D80]"}`}>International</button>
                <button onClick={() => { setSelected(2); setAmount(0); }} className={`w-1/2 rounded-lg p-1 ${selected === 2 ? "bg-white" : "text-[#666D80]"}`}>Same Currency</button>
            </div>
            {selected === 1 &&
                <div className="mt-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-[12px]">
                        <label className="font-bold">
                            You send exactly
                        </label>
                        <div className="flex gap-2 text-[#666D80]">
                            <input 
                                type="number"
                                onChange={handleAmountChange} 
                                className="w-3/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                            <input 
                                type="text"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="w-1/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px]">
                        <div className="flex justify-between">
                            <div>
                                Connected Bank Account (ACH) fee
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.001).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                Our fee
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.00465).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                Conversion charges
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.002).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold">
                                Total fees
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.00765).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-2 h-[1px] bg-[#DFE1E7]"></div>
                    <div className="flex flex-col gap-1 text-[12px]">
                        <label className="font-bold">
                            Recipient gets
                        </label>
                        <div className="flex gap-2 text-[#666D80]">
                            <input 
                                type="number"
                                disabled 
                                value={amount ? (amount - (amount * 0.00765)).toFixed(2) : ''}
                                className="w-3/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                            <input 
                                type="text"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                className="w-1/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                        </div>
                    </div>
                    <button className="bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                        Continue
                    </button>
                </div>
            }
            {selected === 2 &&
                <div className="mt-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-[12px]">
                        <label className="font-bold">
                            You send exactly
                        </label>
                        <div className="flex gap-2 text-[#666D80]">
                            <input 
                                type="number"
                                onChange={handleAmountChange} 
                                className="w-3/4 border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                            <input 
                                type="text"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
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
                                {amount ? `${(amount * 0.00075).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                Our fee
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.00125).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold">
                                Total fees
                            </div>
                            <div className="mr-2">
                                {amount ? `${(amount * 0.002).toFixed(2)} ${currency}` : "-"}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-2 h-[1px] bg-[#DFE1E7]"></div>
                    <div className="flex flex-col gap-1 text-[12px]">
                        <label className="font-bold">
                            Recipient gets
                        </label>
                        <div className="flex gap-2 text-[#666D80]">
                            <input 
                                type="number"
                                disabled 
                                value={amount ? (amount - (amount * 0.002)).toFixed(2) : ''}
                                className="w-full border-[#DFE1E7] border-2 rounded-md focus:outline-none px-2 py-1"
                            />
                        </div>
                    </div>
                    <button className="bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                        Continue
                    </button>
                </div>
            }
        </div>
    );
}

export default SendMoneyAmountForm;