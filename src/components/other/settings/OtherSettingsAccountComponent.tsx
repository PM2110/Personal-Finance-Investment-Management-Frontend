import { BiUser } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { updateUser, UserData } from "../../../redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { GetConstant } from "../../constants";

interface OtherSettingsAccountComponentProps {
    user: UserData;
}

const OtherSettingsAccountComponent: React.FC<OtherSettingsAccountComponentProps> = ({ user }) => {

    const dispatch = useDispatch<AppDispatch>();
    const [edit, setEdit] = useState(0);
    const [value, setValue] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = async () => {
        switch (edit) {
            case 1:
                await dispatch(updateUser(user.userID, { userName: value } as UserData));
                break;
            case 2:
                await dispatch(updateUser(user.userID, { email: value } as UserData));
                break;
            case 3:
                await dispatch(updateUser(user.userID, { phoneNumber: value } as UserData));
                break;
            case 4:
                await dispatch(updateUser(user.userID, { address: value } as UserData));
                break;
        }
        setEdit(0);
        setValue('');
    }

    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("PROFILE_PHOTO_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Min 400x400px, PNG or JPEG formats.
                    </div>
                </div>
                <div className="flex gap-8 justify-between items-center">
                    <div className="text-[30px] font-semibold">
                        <BiUser />
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        {GetConstant("CHANGE_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("FULL_NAME_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official full name for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    {edit === 1
                     ? <input onChange={handleOnChange} className="text-[13px] w-full font-semibold focus:outline-none border-[#DFE1E7] border-2 rounded-lg p-1" defaultValue={user.userName} />
                     : <div className="text-[13px] font-semibold">
                        {user.userName}
                    </div>}
                    {edit === 1
                     ? <div className="flex flex-row gap-3">
                        <button onClick={() => { setEdit(0); setValue(''); }} className="flex items-center gap-3 text-[12px] font-medium bg-red-500 w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("CANCEL_LABEL")}
                        </button>
                        <button onClick={handleSubmit} className="flex items-center gap-3 text-[12px] font-medium bg-[#40C4AA] w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("SAVE_LABEL")}
                        </button>
                    </div>
                     : <button onClick={() => { setEdit(1); setValue(user.userName); }} className="flex items-center gap-3 text-[12px] font-medium hover:cursor-pointer">
                        {GetConstant("EDIT_LABEL")}
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>}
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("EMAIL_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official email address for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    {edit === 2
                     ? <input onChange={handleOnChange} className="text-[13px] w-full font-semibold focus:outline-none border-[#DFE1E7] border-2 rounded-lg p-1" defaultValue={user.email} />
                     : <div className="text-[13px] font-semibold">
                        {user.email}
                    </div>}
                    {edit === 2
                     ? <div className="flex flex-row gap-3">
                        <button onClick={() => { setEdit(0); setValue(''); }} className="flex items-center gap-3 text-[12px] font-medium bg-red-500 w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("CANCEL_LABEL")}
                        </button>
                        <button onClick={handleSubmit} className="flex items-center gap-3 text-[12px] font-medium bg-[#40C4AA] w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("SAVE_LABEL")}
                        </button>
                    </div>
                     : <button onClick={() => { setEdit(2); setValue(user.email); }} className="flex items-center gap-3 text-[12px] font-medium hover:cursor-pointer">
                        {GetConstant("EDIT_LABEL")}
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>}
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("PHONE_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official phone number for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    {edit === 3
                     ? <input onChange={handleOnChange} className="text-[13px] w-full font-semibold focus:outline-none border-[#DFE1E7] border-2 rounded-lg p-1" defaultValue={user.phoneNumber} />
                     : <div className="text-[13px] font-semibold">
                        {user.phoneNumber}
                    </div>}
                    {edit === 3
                     ? <div className="flex flex-row gap-3">
                        <button onClick={() => { setEdit(0); setValue(''); }} className="flex items-center gap-3 text-[12px] font-medium bg-red-500 w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("CANCEL_LABEL")}
                        </button>
                        <button onClick={handleSubmit} className="flex items-center gap-3 text-[12px] font-medium bg-[#40C4AA] w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("SAVE_LABEL")}
                        </button>
                    </div>
                     : <button onClick={() => { setEdit(3); setValue(user.phoneNumber); }} className="flex items-center gap-3 text-[12px] font-medium hover:cursor-pointer">
                        {user.phoneNumber ? GetConstant("EDIT_LABEL") : GetConstant("ADD_LABEL")}
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>}
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            {/* Address */}
            <div className="w-full flex gap-8">
                <div className="w-[80%] sm:max-lg:min-w-[50%] md:w-[50%] lg:min-[30.8%] lg:w-[30.8%] xl:min-w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("ADDRESS_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official residential address for billing details and shipments.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    {edit === 4
                     ? <input onChange={handleOnChange} className="text-[13px] w-full font-semibold focus:outline-none border-[#DFE1E7] border-2 rounded-lg p-1" defaultValue={user.address} />
                     : <div className="text-[13px] font-semibold">
                        {user.address}
                    </div>}
                    {edit === 4
                     ? <div className="flex flex-row gap-3">
                        <button onClick={() => { setEdit(0); setValue(''); }} className="flex items-center gap-3 text-[12px] font-medium bg-red-500 w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("CANCEL_LABEL")}
                        </button>
                        <button onClick={handleSubmit} className="flex items-center gap-3 text-[12px] font-medium bg-[#40C4AA] w-fit px-2 py-1 rounded-lg text-white hover:cursor-pointer">
                            {GetConstant("SAVE_LABEL")}
                        </button>
                    </div>
                     : <button onClick={() => { setEdit(4); setValue(user.address); }} className="flex items-center gap-3 text-[12px] font-medium hover:cursor-pointer">
                        {user.address ? GetConstant("EDIT_LABEL") : GetConstant("ADD_LABEL")}
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>}
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsAccountComponent;
