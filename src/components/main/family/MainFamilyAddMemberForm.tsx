import { RiCloseLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { addMember, FamilyData } from "../../../redux/familySlice";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

interface MainFamilyAddMemberFormProps {
    isVisible: boolean,
    onClose: () => void
}

interface FamilyMember {
    memberEmail: string,
    relationType: string,
    relationWith: number,
    familyID: number,
}

const relations = ["Father", "Son", "Daughter", "Mother", "Brother", "Sister", "Uncle", "Aunty", "Cousin", "Grandfather", "Grandmother", "Grandson", "Granddaughter"];

const MainFamilyAddMemberForm: React.FC<MainFamilyAddMemberFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();
    const families = useSelector((state) => state.family.data);
    const [selectedFamily, setSelectedFamily] = useState<FamilyData>(families[0]);
    const { reset, handleSubmit, formState: { errors }, register } = useForm<FamilyMember>();

    const handleOnFamilyChange: (e: ChangeEvent<HTMLSelectElement>) => void = (e) => {
        setSelectedFamily(families.filter((family: FamilyData) => family.familyName === e.target.value)[0]);
    }

    const onSubmit: SubmitHandler<FamilyMember> = async (data: FamilyMember) => {
        try {
            data.familyID = selectedFamily.familyID;
            const response = await dispatch(addMember({ memberEmail: data.memberEmail, familyMember: data }));
            if(response?.status === 200 && response.data.msg){
                toast.error(response.data.msg);
            }
            else if(response?.status === 200) {
                toast.success("New member added successfully.");
            }
        } catch (error) {
            toast.error("Error adding new member.");
            console.log("Error while adding member ", error);
        }
    }
    
    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Member</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full">
                    <div className="flex flex-col gap-4">
                        <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                            SELECT FAMILY
                        </div>
                        <div className="px-4 flex flex-col gap-4 text-[#666D80]">
                            <select onChange={handleOnFamilyChange} className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                {families && families.length != 0
                                ? families.map((family: FamilyData, index: number) => (
                                    <option key={index} value={family.familyName}>{family.familyName}</option>
                                )) 
                                : "No Families Found."
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                            MEMBER EMAIL
                        </div>
                        <div className="px-4 flex flex-col gap-4 text-[#666D80]">
                            <input
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter Members's email..."
                                {...register("memberEmail")} 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                            RELATION DETAILS
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col px-4 text-[#666D80] w-full gap-1">
                                <label className="text-[13px]">Type of Relation</label>
                                <select
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[12px] focus:outline-none"
                                    {...register("relationType")}
                                >
                                    {relations.map((relation, index) => (
                                        <option key={index} value={relation}>{relation} Of</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col px-4 text-[#666D80] w-full gap-1">
                                <label className="text-[13px]">Relation with</label>
                                <select
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[12px] focus:outline-none"
                                    {...register("relationWith")}
                                >
                                    {selectedFamily?.familyMembers.trim().split(" ").map((member, index) => (
                                        <option key={index} value={member}>{member}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mt-auto">
                        <button className=" bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                            Add New Member
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainFamilyAddMemberForm;