import { useState } from "react";
import { RiCloseLine, RiMoneyDollarCircleFill, RiWallet3Fill } from "react-icons/ri";
import { currencyList } from "../../currency";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addBalance, BalanceData } from "../../../redux/balanceSlice";
import { useSelector } from "react-redux";

interface MainBalanceAddFormProps {
    isVisible: boolean,
    onClose: () => void
}

const MainBalanceAddForm: React.FC<MainBalanceAddFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();

    const { userID } = useSelector((state) => state.user.data);
    const [isChecked, setIsChecked] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<BalanceData>();


    const onSubmit: SubmitHandler<BalanceData> = async (data: BalanceData) => {
        try {
            data.userID = userID;
            const response = await dispatch(addBalance(data));
            if(response?.status === 201){
                toast.success("Balance added successfully.");
                onClose();
            } else if(response.data.msg){
                toast.error(response.data.msg);
            }
        } catch (error) {
            toast.error("Error while adding balance");
            console.log("Error while adding balance ", error);
        }
    };

    return (
        <div className={`flex flex-col justify-between fixed top-0 right-0 h-full min-w-[300px] bg-white shadow-lg transform ${isVisible ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
            <div className="flex flex-col gap-4 h-full">
                <div className="flex flex-row items-center justify-between px-4 pt-4">
                    <h2 className="text-[16px] ">Add New Balance</h2>
                    <button onClick={onClose} className="border-[#DFE1E7] border-2 px-1 py-1 rounded-full">
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        SELECT TYPE
                    </div>
                    <div className="px-4 flex flex-col gap-4">
                        <div onClick={() => setIsChecked(!isChecked)} className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                            <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                                <RiMoneyDollarCircleFill className="text-[16px]" />
                            </div>
                            <div className="w-full">
                                <div className=" flex justify-between">
                                    Balance
                                    <input type="checkbox" readOnly checked={isChecked} />
                                </div>
                                <div className="text-[12px] text-[#666D80]">
                                    Send, receive and spend money.
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                            <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                                <RiWallet3Fill className="text-[16px]" />
                            </div>
                            <div className="w-full">
                                <div className=" flex justify-between">
                                    Pocket
                                    <input type="checkbox"/>
                                </div>
                                <div className="text-[12px] text-[#666D80]">
                                    Set aside moneyfor whenever you need
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ENTER DETAILS
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Balance Name</label>
                        <input
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            placeholder="Enter balance name..."
                            {...register("balanceName")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-4 w-full text-[14px]">
                        <label>Select Currency</label>
                        <select
                            className="w-full border-[#DFE1E7] border-2 rounded-lg p-2 focus:outline-none"
                            {...register("currency")}
                        >
                            {currencyList.map((currency, index) => (
                                <option key={index} value={currency.value}>{currency.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="p-4 mt-auto">
                        <button className="mt-1 bg-black text-white text-[15px] w-full py-[6px]  border-black border-2 hover:cursor-pointer rounded-lg">
                            Add Balance
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainBalanceAddForm;