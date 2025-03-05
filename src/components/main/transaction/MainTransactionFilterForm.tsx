import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { category } from "../../currency";

interface MainTransactionFilterFormProps {
    isVisible: boolean,
    onClose: () => void,
    onApplyFilter: (status: string, category: string) => void,
    onClearFilter: () => void,
}

const MainTransactionFilterForm: React.FC<MainTransactionFilterFormProps> = ({ isVisible, onClose, onApplyFilter, onClearFilter }) => {
    const [status, setStatus] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const handleApplyFilter = () => {
        onApplyFilter(status, selectedCategory);
        onClose();
    };

    const handleClearFilter = () => {
        setStatus("");
        setSelectedCategory("");
        onClearFilter();
        onClose();
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Filter</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        STATUS
                    </div>
                    <div className="px-4">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full text-[13px] border-[#DFE1E7] border-2 rounded-xl p-2 focus:outline-none"
                        >
                            <option value="">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        CATEGORY
                    </div>
                    <div className="px-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full text-[13px] border-[#DFE1E7] border-2 rounded-xl p-2 focus:outline-none"
                        >
                            <option value="">All</option>
                            {category.map((type, index) => (
                                <option key={index} value={type.key}>{type.value}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 p-4 mt-auto">
                <button onClick={handleClearFilter} className="mt-1 text-[15px] w-full py-[6px]  border-[#DFE1E7] border-2 hover:cursor-pointer rounded-lg">
                    Clear All
                </button>
                <button onClick={handleApplyFilter} className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Apply All
                </button>
            </div>
        </div>
    );
}

export default MainTransactionFilterForm;