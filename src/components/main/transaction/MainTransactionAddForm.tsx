import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { addTransaction, TransactionData } from "../../../redux/transactionSlice";
import { useSelector } from "react-redux";
import { BalanceData, updateBalance } from "../../../redux/balanceSlice";

interface MainTransactionAddFormProps {
    isVisible: boolean,
    onClose: () => void,
}

const MainTransactionAddForm: React.FC<MainTransactionAddFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { userName, userID } = useSelector((state) => state.user.data);
    const [transactionType, setTransactionType] = useState("Income");
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TransactionData>();
    const balanceList = useSelector((state) => state.balance.data);

    const onSubmit: SubmitHandler<TransactionData> = async (data: TransactionData) => {
        try {
            if (transactionType === "Income") {
                data.to = userName;
            } else {
                data.from = userName;
            }
            data.userID = userID;
            const balance: BalanceData = balanceList.filter((balance: BalanceData) => balance.currency === data.currency)[0];
            data.balanceID = balance.balanceID;
            console.log(balance);
            const response = await dispatch(addTransaction(data));
            if (response?.data) {
                if (transactionType === "Income"){
                    await dispatch(updateBalance(balance.balanceID, { income: Number(balance.income) + Number(data.amount) } as BalanceData));
                } else {
                    await dispatch(updateBalance(balance.balanceID, { expense: Number(balance.expense) + Number(data.amount) } as BalanceData));
                }
                reset();
                toast.success("Transaction added successfully.");
            }
            reset();
            onClose();
        } catch {
            toast.error("Error while adding transaction.");
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Transaction</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
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
                            <select onChange={(e) => setTransactionType(e.target.value)} className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none">
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Amount</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter amount..."
                                {...register("amount")}
                            />
                        </div>
                        {transactionType === "Income"
                         ? <div className="flex flex-col gap-1">
                            <label>From</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none" 
                                placeholder="Enter sender name..."
                                {...register("from")}
                            />
                        </div>
                         : <div className="flex flex-col gap-1">
                            <label>To</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter receiver name..."
                                {...register("to")}
                            />
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
                        <div className="flex flex-col gap-1">
                            <label>Currency</label>
                            <select 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                {...register("currency")}
                            >
                                {balanceList && balanceList.length !== 0
                                 ? balanceList.map((balance: BalanceData, index: number) => (
                                    <option key={index} value={balance.currency}>{balance.currency}</option>))
                                 : "Add balance to add a transaction"}
                            </select>
                        </div>
                        <button className="mt-auto bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                            Add Transaction
                        </button>
                    </form>
                </div>
            </div>
            <div className="p-4 mt-auto">
            </div>
        </div>
    );
}

export default MainTransactionAddForm;