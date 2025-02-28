import { SubmitHandler, useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import { AccountData, addAccount } from "../../../redux/accountSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { currencyList } from "../../currency";

interface MainRecipientsAddAccountFormProps {
    isVisible: boolean,
    onClose: () => void,
}

const MainRecipientsAddAccountForm: React.FC<MainRecipientsAddAccountFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();

    const { userID } = useSelector((state) => state.user.data);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AccountData>();

    const onSubmit: SubmitHandler<AccountData> = async (data: AccountData) => {
        try {
            data.userID = userID;
            data.cvv = Number(data.cvv);
            const response = await dispatch(addAccount(data));
            if (response?.data) {
                reset();
                toast.success("Account added successfully.");
            }
            reset();
            onClose();
        } catch {
            toast.error("Error while adding account.");
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col h-full gap-4">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add Account</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col h-full gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ENTER ACCOUNT DETAILS
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-3 px-4 pb-4 text-[14px]">
                        <div className="flex flex-col gap-1">
                            <label>Account Holder</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter account holder name..."
                                {...register("accountHolder")}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Account Number</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter account holder name..."
                                {...register("accountNumber")}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
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
                        <div className="flex flex-col gap-1">
                            <label>Balance</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter balance..."
                                {...register("balance")}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>CVV</label>
                            <input 
                                className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 text-[13px] focus:outline-none"
                                placeholder="Enter your cvv..."
                                type="password"
                                {...register("cvv")}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
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
                        <button className="mt-auto bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                            Add Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainRecipientsAddAccountForm;