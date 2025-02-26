import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountData } from "../../../redux/accountSlice";
import toast from "react-hot-toast";
import { RiCloseLine } from "react-icons/ri";

interface MainEditAccountFormProps {
    isVisible: boolean,
    onClose: () => void,
}

const MainEditAccountForm: React.FC<MainEditAccountFormProps> = ({ isVisible, onClose }) => {

    const dispatch = useDispatch<AppDispatch>();
    
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<AccountData>();

    useEffect(() => {
        // setValue("accountID", selectedAccount?.accountID);
        // setValue("budgetCategory", budget?.budgetCategory || "");
        // setValue("budgetDuration", budget?.budgetDuration || "");
        // setValue("budgetID", budget?.budgetID || 0);
        // setValue("limit", budget?.limit || 0);
        // setValue("spent", budget?.spent || 0);
        // setValue("userID", budget?.userID || 0);
        // setValue("startDate", budget?.startDate || new Date());
        // setValue("endDate", budget?.endDate || new Date());
    }, [])

    const onSubmit: SubmitHandler<AccountData> = async (data: AccountData) => {
        try {
            const response = {};
            if(response?.data.budget){
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
                <div className="flex flex-col gap-4">
                    <div className="text-[#818898] text-[14px] bg-[#F6F8FA] py-1 px-4 w-full">
                        ACCOUNT
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainEditAccountForm;