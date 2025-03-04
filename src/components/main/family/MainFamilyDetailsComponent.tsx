import { RiCloseLine } from "react-icons/ri";
import { FamilyData } from "../../../redux/familySlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { FamilyMemberData, setFamilyMember, updateFamilyMember } from "../../../redux/familyMemberSlice";
import { useSelector } from "react-redux";
import { getUserNames, sendEmail } from "../../../redux/userSlice";
import { AccountData, getAccounts } from "../../../redux/accountSlice";
import toast from "react-hot-toast";
import { category } from "../../currency";
import { addTransaction, TransactionData } from "../../../redux/transactionSlice";
import FamilyTree from "./FamilyTree";
import { buildFamilyTree, FamilyTreeNode } from "./BuildFamilyTree";

interface MainFamilyDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    family: FamilyData | undefined,
}

const MainFamilyDetailsComponent: React.FC<MainFamilyDetailsComponentProps> = ({ isVisible, onClose, family }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { userID, userName, email } = useSelector((state) => state.user.data);
    const familyMembers: FamilyMemberData[] = useSelector((state) => state.familyMember.data);
    const { notificationMethods, generalNotifications } = useSelector((state) => state.userPreference.data);
    const [ids, setIds] = useState<string>("");
    const [userNames, setUserNames] = useState<{ userID: number, userName: string }[]>([]);
    const [idUser, setIdUser] = useState<{ [key: number]: string }>({});
    const [selectedMember, setSelectedMember] = useState<FamilyMemberData | null>(null);
    const [accounts, setAccounts] = useState<AccountData[]>();
    const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
    const [isTakePopupVisible, setIsTakePopupVisible] = useState(false);
    const [spendLimit, setSpendLimit] = useState<number>(0);
    const [takeAmount, setTakeAmount] = useState<number>(0);
    const myAccounts = useSelector((state) => state.account.data);
    const [selectedAccount, setSelectedAccount] = useState<AccountData | null>(accounts ? accounts[0] : null);
    const [selectedMyAccount, setSelectedMyAccount] = useState<AccountData | null>(myAccounts ? myAccounts[0] : null);
    const [selectedCategory, setSelectedCategory] = useState<string>(category[0].key);

    useEffect(() => {
        const uniqueIds = new Set<number>();
        familyMembers.forEach((member: FamilyMemberData) => {
            uniqueIds.add(member.user1);
            uniqueIds.add(member.user2);
        });
        setIds(Array.from(uniqueIds).join(" "));
    }, [familyMembers]);

    useEffect(() => {
        setSpendLimit(selectedMember?.limit || 0);
        dispatch(getAccounts(selectedMember?.user1 || 0)).then((data) => { setAccounts(data); setSelectedAccount(data[0] || null); });
    }, [selectedMember])

    useEffect(() => {
        if(ids) {
            dispatch(getUserNames(ids)).then((data) => setUserNames(data));
        }
        dispatch(setFamilyMember(family?.familyID || 0));
    }, [ids, family, dispatch]);

    useEffect(() => {
        const temp: { [key: number]: string } = {}
        if(userNames.length > 0){
            userNames.forEach((user) => {
                temp[user.userID] = user.userName;
            });
            setIdUser(temp);
        }
    }, [userNames]);

    const handleEditClick = (member: FamilyMemberData) => {
        setSelectedMember(member);
        setSpendLimit(member.limit || 0);
        setIsEditPopupVisible(true);
    };

    const handleTakeClick = (member: FamilyMemberData) => {
        setSelectedMember(member);
        setIsTakePopupVisible(true);
    };

    const handleSaveLimit = () => {
        if (selectedMember) {
            dispatch(updateFamilyMember(selectedMember.memberID, { limit: spendLimit } as FamilyMemberData));
            toast.success("Limit updated successfully.");
            setIsEditPopupVisible(false);
        }
    };

    const handleTakeAmount = () => {
        if (selectedMember) {
            if (takeAmount > selectedMember.limit) {
                toast.success("Request Sent");
                dispatch(addTransaction({
                    userID: userID,
                    senderAccountID: selectedAccount?.accountID || 0,
                    receiverAccountID: selectedMyAccount?.accountID,
                    receivedAmount: takeAmount,
                    category: selectedCategory,
                    status: "Pending",
                    deduct: true,
                    from: selectedAccount?.accountHolder,
                    to: userName,
                    receivedCurrency: selectedMyAccount?.currency,
                    sentCurrency: selectedAccount?.currency,
                    sentAmount: -1,
                } as TransactionData));
                if(notificationMethods[0] === '1' && generalNotifications[0] === '1'){
                    const sendemail = {
                        to: email,
                        subject: "Transaction requested",
                        html: `
                            <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                                <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                                <p style="font-size: 16px; color: #666;">Transaction request was made at ${new Date().toLocaleString()}.</p>
                            </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                }
            } else {
                dispatch(addTransaction({
                    userID: userID,
                    senderAccountID: selectedAccount?.accountID || 0,
                    receiverAccountID: selectedMyAccount?.accountID,
                    receivedAmount: takeAmount,
                    category: selectedCategory,
                    status: "Completed",
                    deduct: true,
                    from: selectedAccount?.accountHolder,
                    to: userName,
                    receivedCurrency: selectedMyAccount?.currency,
                    sentCurrency: selectedAccount?.currency,
                    sentAmount: -1,
                } as TransactionData));
                if(notificationMethods[0] === '1' && generalNotifications[0] === '1'){
                    const sendemail = {
                        to: email,
                        subject: "Transaction made to your account",
                        html: `
                        <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                            <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                            <p style="font-size: 16px; color: #666;">Transaction was made to your account at ${new Date().toLocaleString()}.</p>
                        </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                }
                dispatch(updateFamilyMember(selectedMember.memberID, { spent: (selectedMember.spent || 0) + takeAmount } as FamilyMemberData));
                toast.success("Amount taken successfully.");
            }
            setIsTakePopupVisible(false);
        }
    };

    const admin = family?.createdByID === userID;

    const [familyTree, setFamilyTree] = useState<FamilyTreeNode | null>(null);
    useEffect(() => {
        setFamilyTree(buildFamilyTree(familyMembers, idUser, family?.createdByID || 0));
    }, [familyMembers, idUser, family?.createdByID]);

    const canEdit = (member: FamilyMemberData) => {
        return admin || member.relationType === "Father" || member.relationType === "Mother";
    };

    const canTake = (member: FamilyMemberData) => {
        return member.relationType === "Son" || member.relationType === "Daughter";
    };

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
                    Created by {idUser && idUser[Number(family?.createdByID)]} at {family && new Date(family.createdAt).toLocaleString()} 
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        MEMBERS
                    </div>
                    <div className="flex flex-col gap-2 px-4 text-[13px] text-[#666D80]">
                        <div>{idUser && idUser[Number(family?.createdByID)]} ( ADMIN )</div>
                        {familyTree ? <FamilyTree data={familyTree} /> : "No members found."}
                    </div>
                </div>
            </div>

            {isEditPopupVisible && (
                <div className="fixed inset-0 bg-black/50 z-10 flex items-center justify-center">
                    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg">
                        <h2>Edit Spend Limit</h2>
                        <div className="flex flex-col text-[14px]">
                            <label>Limit</label>
                            <input
                                type="text"
                                value={spendLimit}
                                onChange={(e) => setSpendLimit(Number(e.target.value))}
                                className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col text-[14px]">
                            <label>Already Spent</label>
                            <input
                                disabled
                                type="text"
                                value={selectedMember?.spent || 0}
                                onChange={(e) => setSpendLimit(Number(e.target.value))}
                                className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none hover:cursor-not-allowed"
                            />
                        </div>
                        <div className="flex gap-3 items-center w-full">
                            <button onClick={() => setIsEditPopupVisible(false)} className="w-full bg-red-500 text-white p-2 rounded-lg">Cancel</button>
                            <button onClick={handleSaveLimit} className="w-full bg-green-500 text-white p-2 rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            )}

            {isTakePopupVisible && (
                <div className="fixed inset-0 bg-black/50 z-10 flex items-center justify-center">
                    <div className="flex flex-col gap-3 bg-white p-4 rounded-lg">
                        <h2>Take Amount</h2>
                        <div className="flex flex-col text-[14px]">
                            <label>Select Sender's Account</label>
                            <select onChange={(e) => setSelectedAccount(accounts?.filter((account: AccountData) => Number(e.target.value) === account.accountID)[0] || null)} className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none">
                                {accounts ? accounts.map((account: AccountData) => (
                                    <option key={account.accountID} value={account.accountID}>
                                        {account.accountHolder} (Acc No.: xxx{account.accountNumber.slice(-4)})
                                    </option>
                                )) : <div className="text-[#666D80] text-[13px]">No accounts found for selected user.</div>}
                            </select>
                        </div>
                        <div className="flex flex-col text-[14px]">
                            <label>Select Your Account</label>
                            <select onChange={(e) => setSelectedMyAccount(myAccounts.filter((account: AccountData) => Number(e.target.value) === account.accountID)[0])} className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none">
                                {myAccounts ? myAccounts.map((account: AccountData) => (
                                    <option key={account.accountID} value={account.accountID}>
                                        {account.accountHolder} (Acc No.: xxx{account.accountNumber.slice(-4)})
                                    </option>
                                )) : <div className="text-[#666D80] text-[13px]">No accounts found for selected user.</div>}
                            </select>
                        </div>
                        <div className="flex flex-col text-[14px]">
                            <label>Select Category</label>
                            <select onChange={(e) => setSelectedCategory(e.target.value)} className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none">
                                {category ? category.map((type: { key: string, value: string }, index: number) => (
                                    <option key={index} value={type.key}>
                                        {type.value}
                                    </option>
                                )) : <div className="text-[#666D80] text-[13px]">No categories found.</div>}
                            </select>
                        </div>
                        <div className="flex flex-col text-[14px]">
                            <label>Enter Amount</label>
                            <input
                                type="text"
                                value={takeAmount}
                                onChange={(e) => setTakeAmount(Number(e.target.value))}
                                className="border-[#DFE1E7] border-2 text-[#666D80] p-2 rounded-lg text-[13px] focus:outline-none"
                            />
                        </div>
                        <div className="flex gap-3 w-full">
                            <button onClick={() => setIsTakePopupVisible(false)} className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">Cancel</button>
                            <button onClick={handleTakeAmount} className="w-full bg-green-500 text-white p-2 rounded-lg mt-2">Take</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainFamilyDetailsComponent;