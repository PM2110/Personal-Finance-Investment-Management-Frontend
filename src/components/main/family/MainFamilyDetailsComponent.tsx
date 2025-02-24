import { RiCloseLine } from "react-icons/ri";
import { FamilyData } from "../../../redux/familySlice";

interface MainFamilyDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    family: FamilyData | undefined,
}

const MainFamilyDetailsComponent: React.FC<MainFamilyDetailsComponentProps> = ({ isVisible, onClose, family }) => {
    const members = family?.familyMembers.trim().split(" ");
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[600px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Family: {family?.familyName}</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="px-4 text-[13px] text-[#666D80]">
                    Created by {members && members[0]} at {family && new Date(family.createdAt).toLocaleString()} 
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        MEMBERS
                    </div>
                    <div className="px-4 text-[13px] text-[#666D80]">
                        {members && members.length !== 0 ? members.map((member, index) => (
                            <div>{member}</div>
                        )) : "No members found." }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFamilyDetailsComponent;