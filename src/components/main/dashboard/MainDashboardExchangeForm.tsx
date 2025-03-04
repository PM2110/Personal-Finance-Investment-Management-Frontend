import { RiCloseLine } from "react-icons/ri";
import { currencyList } from "../../currency";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { fetchCurrencyValues, setCurrency, setCurrencyValues } from "../../../redux/userPreferenceSlice";
import { useSelector } from "react-redux";

interface MainExchangeFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainDashboardExchangeForm: React.FC<MainExchangeFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { currency } = useSelector((state) => state.userPreference.data);
    const [selectedCurrency, setSelectedCurrency] = useState<{value: string, name: string, flag: React.ReactElement} | null>(null);

    const handleCurrency = () => {
        dispatch(fetchCurrencyValues(selectedCurrency?.value));
        onClose();
    }

    const handleDefault = () => {
        dispatch(setCurrency(null));
        dispatch(setCurrencyValues({}));
    }

    return (
        <div className={`flex flex-col fixed top-0 right-0 h-full w-auto min-w-[316px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Exchange Rate</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        CHANGE CURRENCY
                    </div>
                    <div className="px-4 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none">
                            <div className="w-6 h-6">{selectedCurrency?.flag}</div>
                            <select defaultValue={selectedCurrency?.value} onChange={(e) => setSelectedCurrency(currencyList.filter((currency) => currency.value === e.target.value)[0])} className="w-full focus:outline-none">
                                {currencyList.map((currency, index) => (
                                    <option key={index} value={currency.value}>{currency.name}</option>
                                ))}
                            </select>
                        </div>
                        {/* <button className="border-[#DFE1E7] border-2 rounded-full w-fit p-1 text-[#666D80]">
                            <RiArrowUpDownFill className="text-[20px]"/>
                        </button>
                        <select className="w-full border-[#DFE1E7] text-[14px] border-2 rounded-lg p-2 focus:outline-none">
                            {currencyList.map((currency, index) => (
                                <option key={index} value={currency.value}>{currency.name}</option>
                            ))}
                        </select> */}
                    </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        DETAIL CURRENCY
                    </div>
                    <div className="p-4 w-full">
                        
                    </div>
                </div> */}
            </div>
            <div className="flex gap-2 p-4 mt-auto">
                <button onClick={handleDefault} className="mt-1 bg-red-500 text-white text-[15px] w-full py-[6px] border-red-500 border-2 hover:cursor-pointer rounded-lg">
                    Default
                </button>
                <button onClick={handleCurrency} className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Exchange
                </button>
            </div>
        </div>
    );
};

export default MainDashboardExchangeForm;