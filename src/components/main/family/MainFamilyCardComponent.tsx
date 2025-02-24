import { BiUser } from "react-icons/bi";
import { FamilyData } from "../../../redux/familySlice";
import { RiArrowRightSLine } from "react-icons/ri";

interface MainFamilyCardComponentProps {
    family: FamilyData
    setSelectedFamily: (family: FamilyData) => void,
}

const MainFamilyCardComponent: React.FC<MainFamilyCardComponentProps> = ({ family, setSelectedFamily }) => {

    const familyMembers = family.familyMembers.trim().split(" ");

    return (
        <div onClick={() => setSelectedFamily(family)} className="flex items-center justify-between border-[#DFE1E7] border-2 p-2 rounded-xl">
            <div className="flex items-center gap-3">
                <BiUser className="text-[18px]"/>
                <div className="flex flex-col justify-between">
                    <div className="text-[14px]">
                        {family.familyName}
                    </div>
                    <div className="text-[#818898] text-[12px]">
                        Created by {familyMembers[0]} at {new Date(family.createdAt).toLocaleString()}.
                    </div>
                </div>
            </div>
            <RiArrowRightSLine className="text-[22px] text-black"/>
        </div>
    );
}

export default MainFamilyCardComponent;