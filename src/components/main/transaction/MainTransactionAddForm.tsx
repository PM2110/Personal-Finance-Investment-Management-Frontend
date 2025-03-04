import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { addTransaction, TransactionData } from "../../../redux/transactionSlice";
import { useSelector } from "react-redux";
import { AccountData, fetchAccount, getAccounts } from "../../../redux/accountSlice";
import { sendEmail, verifyEmail } from "../../../redux/userSlice";

interface MainTransactionAddFormProps {
    isVisible: boolean,
    onClose: () => void,
}

const MainTransactionAddForm: React.FC<MainTransactionAddFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();
    
    const { userName, userID, email } = useSelector((state) => state.user.data);
    const { notificationMethods, generalNotifications } = useSelector((state) => state.userPreference.data);
    const accounts: AccountData[] = useSelector((state) => state.account.data);
    
    const [transactionType, setTransactionType] = useState("Income");
    const [verified, setVerified] = useState(false);

    const [cvv, setCVV] = useState(0);
    const [cvvVerified, setCvvVerified] = useState(false);
    
    const [otherEmail, setOtherEmail] = useState("");
    const [otherAccountsList, setOtherAccountsList] = useState<AccountData[] | null>(null);
    
    const { register, handleSubmit, reset, formState: { errors }, getValues, setValue } = useForm<TransactionData>();

    useEffect(() => {
        dispatch(fetchAccount(userID));
    }, [])

    const handleOtherEmailChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setOtherEmail(e.target.value);
        setVerified(false);
    }

    const handleVerify: () => void = async () => {
        const { otherID, otherUserName } = await dispatch(verifyEmail({ email: otherEmail }));
        if(otherID !== -1){
            toast.success(`${transactionType === "Income" ? "Sender found" : "Receiver found"}`);
            if(transactionType === "Income"){
                setValue("from", otherUserName);
            } else {
                setValue("to", otherUserName);
            }
            await dispatch(getAccounts(otherID)).then((response) => setOtherAccountsList(response));
            setVerified(true);
        } else {
            toast.error("No such user found.");
        }
    }

    const handleCVVChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setCVV(Number(e.target.value));
        setCvvVerified(false);
    }

    const handleCVVVerify: () => void = async () => {
        const accountID = Number(getValues("senderAccountID"));
        if(!accountID){
            toast.error("Please select account first.");
        } else {
            const senderAccount: AccountData = accounts.filter((acc) => acc.accountID === accountID)[0];
            if(senderAccount.cvv === cvv){
                setCvvVerified(true);
                toast.success("CVV verified.");
            } else {
                toast.error("Incorrect CVV.");
            }
        }
    }

    const onSubmit: SubmitHandler<TransactionData> = async (data: TransactionData) => {
        try {
            if(transactionType === "Expense"){
                data.status = "Completed";
            } else {
                data.status = "Pending";
            }
            if (transactionType === "Expense") {
                data.from = userName;
                data.sentCurrency = accounts.filter((account: AccountData) => account.accountID === Number(data.senderAccountID))[0].currency;
                data.receivedCurrency = otherAccountsList ? otherAccountsList.filter((account: AccountData) => account.accountID === Number(data.receiverAccountID))[0].currency : "";
            } else {
                data.to = userName;
                data.receivedCurrency = accounts.filter((account: AccountData) => account.accountID === Number(data.receiverAccountID))[0].currency;
                data.sentCurrency = otherAccountsList ? otherAccountsList.filter((account: AccountData) => account.accountID === Number(data.senderAccountID))[0].currency : "";
            }
            data.userID = userID;
            data.sentAmount = Number(data.sentAmount);
            data.status = transactionType === "Expense" ? "Completed" : "Pending";
            // const balance: BudgetData = balanceList.filter((balance: BudgetData) => balance.currency === data.currency)[0];
            // data.budgetID = balance.budgetID;
            const response = await dispatch(addTransaction(data));
            if(response.data.msg) {
                toast.error(response.data.msg);
            }
            else if(response.data.transaction) {
                reset();
                setVerified(false);
                onClose();
                if(data.status === "Completed" && transactionType === "Expense" && notificationMethods[0] === '1' && generalNotifications[0] === '1'){
                    let sendemail = {
                        to: email,
                        subject: "Transaction made from your account",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Transaction was made from your account at ${new Date().toLocaleString()}.</p>
                              <p style="font-size: 14px; color: #999; margin-top: 20px;">If you haven't made a transaction, immediately contact your bank..</p>
                          </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                    sendemail = {
                        to: otherEmail,
                        subject: "Transaction made to your account",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Transaction was made to your account at ${new Date().toLocaleString()}.</p>
                          </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                } else if(data.status === "Pending" && transactionType === "Income" && notificationMethods[0] === '1' && generalNotifications[0] === '1'){
                    let sendemail = {
                        to: email,
                        subject: "Transaction requested",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Transaction requested at ${new Date().toLocaleString()}.</p>
                              <p style="font-size: 14px; color: #999; margin-top: 20px;">If you haven't made a transaction request, immediately contact your bank..</p>
                          </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                    sendemail = {
                        to: otherEmail,
                        subject: "Transaction request received",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Transaction request was made to your account at ${new Date().toLocaleString()}.</p>
                          </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                } else if(data.status === "Completed" && transactionType === "Income" && notificationMethods[0] === '1' && generalNotifications[0] === '1'){
                    let sendemail = {
                        to: email,
                        subject: "Transaction was made to your account",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Transaction was made in your account at ${new Date().toLocaleString()}.</p>
                            </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                    sendemail = {
                        to: otherEmail,
                        subject: "Transaction was made from your account",
                        html: `
                            <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                            <h2 style="color: #333; font-size: 24px;">From PFIM!</h2>
                            <p style="font-size: 16px; color: #666;">Transaction was made from your account at ${new Date().toLocaleString()}.</p>
                            <p style="font-size: 14px; color: #999; margin-top: 20px;">If you haven't made a transaction request, immediately contact your bank..</p>
                            </div>
                        `,
                    };
                    dispatch(sendEmail(sendemail));
                } 
                toast.success("Transaction added successfully.");
            }
        } catch {
            toast.error("Error while adding transaction.");
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Transaction</h2>
                    <button onClick={() => { reset(); onClose(); setVerified(false); }} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col h-full gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ENTER DETAILS
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-3 px-4 pb-4 text-[14px]">
                        <div className="flex flex-col gap-1">
                            <label>Transaction Type</label>
                            <select onChange={(e) => { setTransactionType(e.target.value); setVerified(false); }} className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-end gap-1 w-full">
                            {transactionType === "Income"
                                ? <div className="flex flex-col gap-1 w-full">
                                <label>From</label>
                                <div className="flex gap-2">
                                    <input 
                                        className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none" 
                                        placeholder="Enter sender email..."
                                        {...register("from", {
                                            onChange: handleOtherEmailChange,
                                        })}
                                    />
                                    {verified ? <div className="flex items-center bg-green-500 text-white p-2 rounded-lg font-bold text-[13px]">Verified</div> : <button onClick={handleSubmit(handleVerify)} className="bg-black text-white text-[13px] p-[10px] rounded-lg hover:cursor-pointer">
                                        Verify
                                    </button>}
                                </div>
                            </div>
                                : <div className="flex flex-col gap-1 w-full">
                                <label>To</label>
                                <div className="flex gap-2">
                                    <input 
                                        className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                        placeholder="Enter receiver email..."
                                        {...register("to", {
                                            onChange: handleOtherEmailChange,
                                        })}
                                    />
                                    {verified ? <div className="flex items-center bg-green-500 text-white p-2 rounded-lg font-bold text-[13px]">Verified</div> : <button onClick={handleSubmit(handleVerify)} className="bg-black text-white text-[13px] p-[10px] rounded-lg hover:cursor-pointer">
                                        Verify
                                    </button>}
                                </div>
                            </div>}
                        </div>
                        {verified && <div className="flex flex-col gap-3 h-full">
                            {transactionType === "Expense" ? (<div className="flex flex-col gap-1">
                                <label>Choose your Account</label>
                                <select {...register("senderAccountID", {
                                    // onChange: (e) => setSelectedAccount(accounts.filter((account: AccountData) => account.accountID === Number(e.target.value))[0])
                                })}  className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                    {accounts.map((account: AccountData, index: number) => (
                                        <option key={index} value={Number(account.accountID)}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                                    ))}
                                </select>
                            </div>) : (<div className="flex flex-col gap-1">
                                <label>Choose your Account</label>
                                <select {...register("receiverAccountID", {
                                    // onChange: (e) => setSelectedAccount(accounts.filter((account: AccountData) => account.accountID === Number(e.target.value))[0])
                                })}  className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                    {accounts.map((account: AccountData, index: number) => (
                                        <option key={index} value={Number(account.accountID)}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                                    ))}
                                </select>
                            </div>)}
                            {transactionType === "Expense" ? (<div className="flex flex-col gap-1">
                                <label>Choose receiver's Account</label>
                                {otherAccountsList && otherAccountsList.length !== 0 ? 
                                <select {...register("receiverAccountID")}
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                    {otherAccountsList.map((account: AccountData, index: number) => (
                                        <option key={index} value={Number(account.accountID)}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                                    ))}
                                </select> : <div className="text-[#666D80] text-[13px]">No account found of receiver.</div>}
                            </div>) : (<div className="flex flex-col gap-1">
                                <label>Choose sender's Account</label>
                                {otherAccountsList && otherAccountsList.length !== 0 ?
                                <select {...register("senderAccountID")}
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                    {otherAccountsList && otherAccountsList.length !== 0 ? otherAccountsList.map((account: AccountData, index: number) => (
                                        <option key={index} value={Number(account.accountID)}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                                    )) : <div>No account found of receiver.</div>}
                                </select> : <div className="text-[#666D80] text-[13px]">No account found of sender.</div>}
                            </div>)}
                            <div className="flex flex-col gap-1">
                                <label>Amount</label>
                                <input 
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                    placeholder="Enter amount..."
                                    {...register("sentAmount")}
                                />
                            </div>
                            {transactionType === "Expense" && <div className="flex flex-col gap-1 w-full">
                                <label>CVV</label>
                                <div className="flex gap-2">
                                    <input 
                                        className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                        placeholder="Enter your cvv..."
                                        onChange={handleCVVChange}
                                    />
                                    {cvvVerified ? <div className="flex items-center bg-green-500 text-white p-2 rounded-lg font-bold text-[13px]">Verified</div> : <button onClick={handleSubmit(handleCVVVerify)} className="bg-black text-white text-[13px] p-[10px] rounded-lg hover:cursor-pointer">
                                        Verify
                                    </button>}
                                </div>
                            </div>}
                            <div className="flex flex-col gap-1">
                                <label>Category</label>
                                <select 
                                    className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                    {...register("category")}
                                >
                                    <option value="houseHold">Household</option>
                                    <option value="homeImprovement">Home Improvement</option>
                                    <option value="foodDrink">Food & Drink</option>
                                    <option value="transport">Transport</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="leisure">Leisure</option>
                                    <option value="healthBeauty">Health & Beauty</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {transactionType === "Expense" && <div className="flex flex-row w-full -mt-1 text-[13px] gap-2">
                                <input 
                                    className="border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                    type="checkbox"
                                    {...register("deduct")}
                                />
                                <label>Deduct from account?</label>
                            </div>}
                            {transactionType === "Expense" && <div className="flex flex-row w-full -mt-2 text-[13px] gap-2">
                                <input 
                                    className="border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                    type="checkbox"
                                    {...register("includeInBudget")}
                                />
                                <label>Include in budget if present?</label>
                            </div>}
                            <button className="mt-auto bg-black text-white text-[15px] w-full py-[6px] border-black border-2 hover:cursor-pointer disabled:hover:cursor-not-allowed disabled:bg-[#666D80] disabled:border-[#666D80] rounded-lg">
                                {transactionType === "Expense" ? "Add Transaction" : "Request"}
                            </button>
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainTransactionAddForm;