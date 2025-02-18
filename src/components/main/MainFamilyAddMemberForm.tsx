import { RiCloseLine } from "react-icons/ri";

interface MainFamilyAddMemberFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainFamilyAddMemberForm: React.FC<MainFamilyAddMemberFormProps> = ({ isVisible, onClose }) => {
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Balance</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        MEMBER EMAIL
                    </div>
                    <div className="px-4 flex flex-col gap-4 text-[#666D80]">
                        <input className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none" placeholder="Enter Members's email..." />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        RELATION DETAILS
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col px-4 text-[#666D80] w-full gap-1">
                            <label className="text-[13px]">Type of Relation</label>
                            <select className="w-full border-[#DFE1E7] border-2 rounded-lg p-2">
                            </select>
                        </div>
                        <div className="flex flex-col px-4 text-[#666D80] w-full gap-1">
                            <label className="text-[13px]">Relation with</label>
                            <select className="w-full border-[#DFE1E7] border-2 rounded-lg p-2">
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-auto">
                <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Add New Member
                </button>
            </div>
        </div>
    );
}

export default MainFamilyAddMemberForm;