import { RiArrowUpDownFill, RiCloseLine } from "react-icons/ri";
import { currencyList, getDiv } from "../../currency";

interface MainExchangeFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainDashboardExchangeForm: React.FC<MainExchangeFormProps> = ({ isVisible, onClose }) => {
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
                        <select className="w-full border-[#DFE1E7] border-2 rounded-lg p-2">
                        </select>
                        <button className="border-[#DFE1E7] border-2 rounded-full w-fit p-1 text-[#666D80]">
                            <RiArrowUpDownFill className="text-[20px]"/>
                        </button>
                        <select className="w-full border-[#DFE1E7] text-[14px] border-2 rounded-lg p-2 focus:outline-none">
                            {currencyList.map((currency, index) => (
                                <option key={index} value={currency.value}>{currency.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        DETAIL CURRENCY
                    </div>
                    <div className="p-4 w-full">
                        
                    </div>
                </div>
            </div>
            <div className="p-4 mt-auto">
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default MainDashboardExchangeForm;