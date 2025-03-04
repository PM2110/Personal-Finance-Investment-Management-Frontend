import { FaUserCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { acceptTransaction, TransactionData, updateTransaction } from "../../../redux/transactionSlice";
import { getCurrency } from "../../currency";
import { AccountData, getAccount } from "../../../redux/accountSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { sendEmail } from "../../../redux/userSlice";

interface MainTransactionDetailsComponentProps {
    isVisible: boolean,
    onClose: () => void,
    userName: string,
    handleDelete: () => void,
    transaction: TransactionData | undefined,
}

const MainTransactionDetailsComponent: React.FC<MainTransactionDetailsComponentProps> = ({ isVisible, onClose, handleDelete, transaction }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { userName } = useSelector((state) => state.user.data);
    const [receiverAccount, setReceiverAccount] = useState<AccountData>();
    const [senderAccount, setSenderAccount] = useState<AccountData>();
    const { generalNotifications, notificationMethods } = useSelector((state) => state.userPreference.data);
    const { email } = useSelector((state) => state.user.data);

    useEffect(() => {
        dispatch(getAccount(transaction?.receiverAccountID || 0)).then((response) => setReceiverAccount(response));
        dispatch(getAccount(transaction?.senderAccountID || 0)).then((response) => setSenderAccount(response));
    }, [transaction, dispatch])

    const handleReject = () => {
        if(notificationMethods[0] === '1' && generalNotifications[0] === '1'){
            const sendemail = {
                to: email,
                subject: "Transaction request rejected",
                html: `
                    <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                        <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                        <p style="font-size: 16px; color: #666;">Your transaction request ${transaction?.transactionID} was rejected at ${new Date().toLocaleString()}.</p>
                    </div>
                `,
            };
            dispatch(sendEmail(sendemail));
        }
        dispatch(updateTransaction(transaction?.transactionID || "", { ...transaction, status: "Rejected" } as TransactionData));
        toast.success("Transaction rejected successfully.");
        onClose();
    }

    const handleAccept = () => {
        if(notificationMethods[0] === '1' && generalNotifications[0] === '1'){
            const sendemail = {
                to: email,
                subject: "Transaction request accepted",
                html: `
                    <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                        <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                        <p style="font-size: 16px; color: #666;">Your transaction request ${transaction?.transactionID} was accepted at ${new Date().toLocaleString()}.</p>
                    </div>
                `,
            };
            dispatch(sendEmail(sendemail));
        }
        dispatch(acceptTransaction(transaction?.transactionID || ""));
        toast.success("Transaction accepted successfully.");
        onClose();
    }

    const handleRequest = () => {
        if(notificationMethods[0] === '1' && generalNotifications[0] === '1'){
            const sendemail = {
                to: email,
                subject: "Transaction requested again",
                html: `
                    <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                        <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                        <p style="font-size: 16px; color: #666;">Your transaction request ${transaction?.transactionID} was sent again at ${new Date().toLocaleString()}.</p>
                    </div>
                `,
            };
            dispatch(sendEmail(sendemail));
        }
        dispatch(updateTransaction(transaction?.transactionID || "", { ...transaction, status: "Pending" } as TransactionData));
        toast.success("Transaction requested successfully.");
        onClose();
    }

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Transaction Details</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        AMOUNT
                    </div>
                    {transaction?.status === "Completed" && <div className="px-4 flex w-full flex-col items-center gap-1 text-[14px]">
                        <div className="w-full flex gap-1">
                            Amount Sent:
                            <div className="flex items-center text-[#666D80]">
                                {getCurrency(transaction?.sentCurrency || "")} {transaction?.sentAmount}
                            </div>
                        </div>
                        <div className="w-full flex gap-1">
                            Amount Received:
                            <div className="flex items-center text-[#666D80]">
                                {getCurrency(transaction?.receivedCurrency || "")} {transaction?.receivedAmount}
                            </div>
                        </div>
                    </div>}
                    {transaction?.status !== "Completed" && <div className="px-4 flex w-full flex-col items-center gap-1 text-[14px]">
                        <div className="w-full flex gap-1">
                            Amount Requested:
                            <div className="flex items-center text-[#666D80]">
                                {getCurrency(transaction?.receivedCurrency || "")} {transaction?.receivedAmount}
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        FROM
                    </div>
                    <div className="w-full flex gap-1 justify-start items-center text-[14px] px-4">
                        <FaUserCircle className="text-[28px]" />
                        <div className="flex flex-col items-start p-2 justify-between text-[16px]">
                            <div className="text-[14px] ">
                                {senderAccount?.accountHolder}
                            </div>
                            <div className="flex gap-1 text-[10px]  text-[#666D80]">
                                <div className="font-semibold tracking-widest">•••••••{senderAccount?.accountNumber?.slice(senderAccount?.accountNumber.length - 4)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        TO
                    </div>
                    <div className="w-full flex gap-1 justify-start items-center text-[14px] px-4">
                        <FaUserCircle className="text-[28px]" />
                        <div className="flex flex-col items-start p-2 justify-between text-[16px]">
                            <div className="text-[14px] ">
                                {receiverAccount?.accountHolder}
                            </div>
                            <div className="flex gap-1 text-[10px]  text-[#666D80]">
                                <div className="font-semibold tracking-widest">•••••••{receiverAccount?.accountNumber?.slice(receiverAccount?.accountNumber.length - 4)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        DETAILS
                    </div>
                    <div className="w-full flex flex-col gap-4 text-[14px] px-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Transaction Category
                            </div>
                            <div className="">
                                {transaction?.category}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Transaction ID
                            </div>
                            <div className="">
                                {transaction?.transactionID}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-[#818898]">
                                Date & Time
                            </div>
                            <div className="">
                                {new Date(transaction?.date).toLocaleString()}
                            </div>
                            <div className="bg-[#DFE1E7] h-[1px] mt-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            {transaction?.status === "Completed" && <div className="flex gap-2 p-4 mt-auto">
                <button onClick={handleDelete} className="mt-1 text-white text-[15px] w-full py-[6px] border-red-500 border-2 bg-red-500 hover:cursor-pointer hover:bg-white hover:text-red-500 rounded-lg">
                    Delete
                </button>
                {/* <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                    Share
                </button> */}
            </div>}
            {transaction?.status === "Rejected" && <div className="flex gap-2 p-4 mt-auto">
                <button disabled className="mt-1 text-white text-[15px] w-full py-[6px] border-red-500 border-2 bg-red-500 hover:cursor-not-allowed rounded-lg">
                    Rejected
                </button>
                {transaction.from !== userName && <button onClick={handleRequest} className="mt-1 bg-green-500 text-white text-[15px] w-full py-[6px] border-green-500 border-2 hover:cursor-pointer rounded-lg">
                    Request
                </button>}
            </div>}
            {transaction?.status === "Pending" && transaction.from === userName && <div className="flex gap-2 p-4 mt-auto">
                <button onClick={handleReject} className="mt-1 text-white text-[15px] w-full py-[6px] border-red-500 border-2 bg-red-500 hover:cursor-pointer rounded-lg">
                    Reject
                </button>
                <button onClick={handleAccept} className="mt-1 bg-green-500 text-white text-[15px] w-full py-[6px]  border-green-500 border-2 hover:cursor-pointer rounded-lg">
                    Accept
                </button>
            </div>}
            {transaction?.status === "Pending" && transaction.from !== userName && <div className="flex gap-2 p-4 mt-auto">
                <button disabled className="mt-1 text-white text-[15px] w-full py-[6px] border-gray-500 border-2 bg-gray-500 hover:cursor-not-allowed rounded-lg">
                    Pending
                </button>
            </div>}
        </div>
    );
}

export default MainTransactionDetailsComponent;