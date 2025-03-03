import { RiCloseLine } from "react-icons/ri";
import { FamilyData } from "../../../redux/familySlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { FamilyMemberData, setFamilyMember } from "../../../redux/familyMemberSlice";
import { useSelector } from "react-redux";

interface MainFamilyDetailsComponentProps {
    isVisible: boolean;
    onClose: () => void;
    family: FamilyData | undefined;
    loggedInUserId: number;
}

interface FamilyTreeNode {
    relation: string;
    members: FamilyMemberData[];
    children: FamilyTreeNode[];
}

const MainFamilyDetailsComponent: React.FC<MainFamilyDetailsComponentProps> = ({ isVisible, onClose, family, loggedInUserId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const familyMembers: FamilyMemberData[] = useSelector((state: any) => state.familyMember.data);
    const [spentLimit, setSpentLimit] = useState<{ [key: number]: number }>({});

    const relations = [
        "Father", "Son", "Daughter", "Mother", "Brother", "Sister", "Uncle", "Aunt", 
        "Cousin", "Grandfather", "Grandmother", "Grandson", "Granddaughter"
    ];

    useEffect(() => {
        if (family?.familyID) {
            dispatch(setFamilyMember(family.familyID));
        }
    }, [family, dispatch]);

    const handleSliderChange = (userId: number, value: number): void => {
        setSpentLimit((prevState) => ({
            ...prevState,
            [userId]: value,
        }));
    };

    const handleSaveLimit = (userId: number): void => {
        if (spentLimit[userId] !== undefined) {
            console.log(`Saving limit for user ${userId}: ${spentLimit[userId]}`);
        }
    };

    const canEdit = (userId: number): boolean => {
        return userId === family?.createdByID || familyMembers.some(member => member.user1 === loggedInUserId && member.relationType === 'Parent');
    };

    const buildFamilyTree = (parentId: number): FamilyTreeNode[] => {
        return relations.map((relation) => {
            const membersWithRelation = familyMembers.filter(member => member.relationType === relation && member.user1 === parentId);
            if (membersWithRelation.length > 0) {
                return {
                    relation,
                    members: membersWithRelation,
                    children: buildFamilyTree(membersWithRelation[0]?.user2 || 0),
                };
            }
            return null;
        }).filter((item): item is FamilyTreeNode => item !== null);
    };

    const familyTree: FamilyTreeNode[] = buildFamilyTree(family?.createdByID || 0);

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[600px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px]">Family: {family?.familyName}</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="px-4 text-[13px] text-[#666D80]">
                    Created by {family?.createdByID} at {family && new Date(family.createdAt).toLocaleString()}
                </div>

                <div className="family-tree-container">
                    {familyTree && familyTree.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            {familyTree.map((relationGroup) => (
                                <div key={relationGroup.relation} className="family-relation-group">
                                    <div className="relation-title">{relationGroup.relation}</div>
                                    <div className="flex justify-center gap-12 mt-4">
                                        {relationGroup.members.map((member) => (
                                            <div key={member.user2} className="family-member-node">
                                                <div className="family-member-info">
                                                    <div>{member.user2} ({member.relationType})</div>
                                                    {canEdit(member.user2) && (
                                                        <div className="flex items-center mt-2">
                                                            <label className="mr-2">Spent Limit: </label>
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="1000"
                                                                step="10"
                                                                value={spentLimit[member.user2] || 0}
                                                                onChange={(e) => handleSliderChange(member.user2, Number(e.target.value))}
                                                                className="w-32"
                                                            />
                                                            <span className="ml-2">{spentLimit[member.user2] || 0}</span>
                                                            <button
                                                                onClick={() => handleSaveLimit(member.user2)}
                                                                className="ml-4 px-2 py-1 text-white bg-blue-500 rounded"
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {relationGroup.children && relationGroup.children.length > 0 && (
                                                    <div className="flex justify-center gap-12 mt-4">
                                                        {relationGroup.children.map((childRelation) => (
                                                            <div key={childRelation.relation} className="family-member-node child-node">
                                                                <div className="family-member-info">
                                                                    <div>{childRelation.relation}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No family tree found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainFamilyDetailsComponent;
