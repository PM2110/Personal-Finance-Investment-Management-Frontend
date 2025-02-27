import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountData, updateAccount } from "../../../redux/accountSlice";
import toast from "react-hot-toast";
import { RiCloseLine } from "react-icons/ri";
import { currencyList } from "../../currency";

interface MainEditAccountFormProps {
    isVisible: boolean,
    onClose: () => void,
    account: AccountData | null,
}

const MainEditAccountForm: React.FC<MainEditAccountFormProps> = ({ isVisible, onClose, account }) => {

    const dispatch = useDispatch<AppDispatch>();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AccountData>({ defaultValues: account });

    const onSubmit: SubmitHandler<AccountData> = async (data: AccountData) => {
        try {
            const response = await dispatch(updateAccount(account?.accountID, data));
            if(response?.data.account){
                toast.success("Account updated successfully.");
                reset();
                onClose();
            } else if(response.data.msg){
                toast.error(response.data.msg);
            }
        } catch (error) {
            toast.error("Error while updating account");
            console.log("Error while updating account ", error);
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Edit Account</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full pb-4 text-[14px]">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ACCOUNT DETAILS
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                        <label>Account Holder</label>
                        <input 
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                            placeholder="Enter account holder name..."
                            {...register("accountHolder")}
                        />
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                        <label>Account Number</label>
                        <input 
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                            placeholder="Enter account holder name..."
                            {...register("accountNumber")}
                        />
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                        <label>Account Type</label>
                        <select 
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                            {...register("accountType")}
                        >
                            <option value="savings">Savings</option>
                            <option value="salary">Salary</option>
                            <option value="fixedDeposit">Fixed Deposit</option>
                            <option value="demat">DEMAT</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                        <label>Balance</label>
                        <input 
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                            placeholder="Enter account holder name..."
                            {...register("balance")}
                        />
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                        <label>Currency</label>
                        <select 
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                            {...register("currency")}
                        >
                            {currencyList.map((type, index) => (
                                <option key={index} value={type.value}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="px-4 mt-auto w-full text-white">
                        <button className="bg-black w-full rounded-lg p-2">
                            Update Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MainEditAccountForm;