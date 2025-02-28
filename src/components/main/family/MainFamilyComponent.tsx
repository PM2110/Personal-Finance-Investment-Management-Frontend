import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import MainFamilyAddMemberForm from "./MainFamilyAddMemberForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { FamilyData, setFamily } from "../../../redux/familySlice";
import MainFamilyCardComponent from "./MainFamilyCardComponent";
import MainFamilyDetailsComponent from "./MainFamilyDetailsComponent";

const MainFamilyComponent = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [visibleFamilyAddMembers, setVisibleFamilyAddMembers] = useState(false);
    const [visibleFamilyDetails, setVisibleFamilyDetails] = useState(false);
    const [selectedFamily, setSelectedFamily] = useState<FamilyData>();
    const families = useSelector((state) => state.family.data);
    const { userID } = useSelector((state) => state.user.data);

    useEffect(() => {
        dispatch(setFamily(userID));
    }, [])

    const handleFamilyAddMembers: () => void = () => {
        setVisibleFamilyAddMembers(!visibleFamilyAddMembers);
    }

    const handleFamilyDetails: () => void = () => {
        setVisibleFamilyDetails(!visibleFamilyDetails);
    }

    if(!families || families.length === 0){
        return (<div className="h-full flex items-center justify-center text-[#666D80]">No Families Found.</div>)
    }
    
    return (
        <div className="flex w-full h-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-col w-full items-start lg:flex-row gap-3 justify-between lg:items-center text-[14px]">
                <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                    <RiSearchLine className="text-[16px]"/>
                    <input className="focus:outline-none" placeholder="Search"/>
                </div>
                <button onClick={handleFamilyAddMembers} className="flex items-center gap-2 border-[#DFE1E7] border-2 px-4 py-2 rounded-lg hover:cursor-pointer">
                    <IoAddOutline className="text-[16px]"/>
                    Add Member
                </button>
            </div>
            <div className="flex flex-col gap-3">
            {families && families.length !== 0
             ? families.map((family: FamilyData, index: number) => (
                    <div key={index} onClick={handleFamilyDetails}>
                        <MainFamilyCardComponent key={index} family={family} setSelectedFamily={setSelectedFamily} />
                    </div>
             )) 
             : "No families found."}
            </div>
            {(visibleFamilyAddMembers || visibleFamilyDetails) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            {visibleFamilyAddMembers && <MainFamilyAddMemberForm isVisible={visibleFamilyAddMembers} onClose={handleFamilyAddMembers}/>}
            <MainFamilyDetailsComponent isVisible={visibleFamilyDetails} onClose={handleFamilyDetails} family={selectedFamily} />
        </div>
    );
}

export default MainFamilyComponent;