import { ChangeEvent, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { category, duration, getCurrency } from "../../currency";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addBudget, BudgetData } from "../../../redux/budgetSlice";
import { useSelector } from "react-redux";
import { AccountData } from "../../../redux/accountSlice";

interface MainBudgetAddFormProps {
    isVisible: boolean,
    onClose: () => void,
}

const MainBudgetAddForm: React.FC<MainBudgetAddFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();

    const { userID } = useSelector((state) => state.user.data);
    const accounts: AccountData[] = useSelector((state) => state.account.data);

    const [selectedAccount, setSelectedAccount] = useState(accounts.length !== 0 ? accounts[0] : null);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [alreadyStarted, setAlreadyStarted] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<BudgetData>();

    const handleOnDateChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        setSelectedDate(new Date(e.target.value).toDateString());
        if(new Date(e.target.value) < new Date()){
            setAlreadyStarted(true);
        } else {
            setAlreadyStarted(false);
        }
    }

    const onSubmit: SubmitHandler<BudgetData> = async (data: BudgetData) => {
        try {
            data.userID = userID;
            data.limit = Number(data.limit);
            data.spent = Number(data.spent) || 0;
            data.accountID = selectedAccount?.accountID || 0;
            data.currency = selectedAccount?.currency || "";
            const response = await dispatch(addBudget(data));
            if(response?.status === 201){
                toast.success("Budget added successfully.");
                reset();
                onClose();
            } else if(response.data.msg){
                toast.error(response.data.msg);
            }
        } catch (error) {
            toast.error("Error while adding budget");
            console.log("Error while adding budget ", error);
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Budget</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        SELECT ACCOUNT
                    </div>
                    <div className="px-4 flex flex-col gap-4">
                        {accounts && accounts.length !== 0 ? 
                            <select onChange={(e) => setSelectedAccount(accounts.filter((account) => account.accountID === Number(e.target.value))[0])} className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none text-[14px]">
                                {accounts.map((account: AccountData, index: number) => (
                                    <option key={index} value={account.accountID}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                                ))}
                            </select> : <div className="text-[#666D80] text-[13px]">Please add account first.</div>}
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ENTER DETAILS
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Budget Category</label>
                        <select
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            {...register("budgetCategory")}
                        >
                            {category.map((type, index: number) => (
                                <option key={index} value={type.key}>{type.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Enter your limit</label>
                        <div className="flex items-center border-[#DFE1E7] bg-[#DFE1E7] border-2 rounded-lg">
                            <div className="text-[18px] p-2">
                                {getCurrency(selectedAccount?.currency || "")}
                            </div>
                            <input
                                className="w-full bg-white rounded-r-lg p-2 focus:outline-none"
                                placeholder="Enter your limit..."
                                {...register("limit")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Budget Duration</label>
                        <select
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            {...register("budgetDuration")}
                        >
                            {duration.map((type, index: number) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Start Date</label>
                        <input
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            {...register("startDate", {
                                onChange: handleOnDateChange
                            })}
                            type="date"
                        />
                    </div>
                    {alreadyStarted && <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Already Spent</label>
                        <div className="flex items-center border-[#DFE1E7] border-2 rounded-lg">
                            <div className="bg-[#DFE1E7] p-2 text-[18px]">
                                {getCurrency(selectedAccount?.currency || "")}
                            </div>
                            <input
                                className="w-full rounded-lg px-2 focus:outline-none"
                                placeholder="Enter amount that is already spent..."
                                {...register("spent")}
                            />
                        </div>
                    </div>}
                    <div className="p-4 mt-auto">
                        <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                            Add Budget
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainBudgetAddForm;