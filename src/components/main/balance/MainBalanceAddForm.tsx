import { useState } from "react";
import { RiCloseLine, RiMoneyDollarCircleFill, RiWallet3Fill } from "react-icons/ri";
import { category, currencyList } from "../../currency";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addBalance, BalanceData } from "../../../redux/balanceSlice";
import { useSelector } from "react-redux";
import { AccountData } from "../../../redux/accountSlice";

interface MainBalanceAddFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainBalanceAddForm: React.FC<MainBalanceAddFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();

    const { userID } = useSelector((state) => state.user.data);
    const accounts = useSelector((state) => state.account.data);
    console.log(accounts);
    const [isChecked, setIsChecked] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<BalanceData>();


    const onSubmit: SubmitHandler<BalanceData> = async (data: BalanceData) => {
        try {
            data.userID = userID;
            const response = await dispatch(addBalance(data));
            if(response?.status === 201){
                toast.success("Budget added successfully.");
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
                        <select className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none text-[14px]">
                            {accounts.map((account: AccountData, index: number) => (
                                <option key={index} value={account.accountNumber}>{account.accountHolder} (Acc. No. : xxx{account.accountNumber.slice(account.accountNumber.length - 4, account.accountNumber.length)})</option>
                            ))}
                        </select>
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
                            {...register("balanceName")}
                        >
                            {category.map((type, index: number) => (
                                <option key={index} value={type.key}>{type.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Enter your limit</label>
                        <input
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            placeholder="Enter your limit..."
                            {...register("currency")}
                        />
                    </div>
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

export default MainBalanceAddForm;