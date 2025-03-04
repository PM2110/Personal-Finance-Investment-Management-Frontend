import { useState } from "react";
import { updateUserPreference, UserPreferenceData } from "../../../redux/userPreferenceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";

interface OtherSettingsNotificationsComponenetProps {
    userPreference: UserPreferenceData,
}

const OtherSettingsNotificationsComponenet: React.FC<OtherSettingsNotificationsComponenetProps> = ({ userPreference }) => {
    
    const dispatch = useDispatch<AppDispatch>();
    const [lowBalanceValue, setLowBalanceValue] = useState(userPreference.lowBalance);
    const [transactionAlerts, setTransactionAlerts] = useState(userPreference.generalNotifications[0] === '1');
    const [lowBalanceAlerts, setLowBalanceAlerts] = useState(userPreference.generalNotifications[1] === '1');
    const [exclusiveOffersAlerts, setExclusiveOffersAlerts] = useState(userPreference.generalNotifications[2] === '1');

    const handleTransactionAlerts: () => void = () => {
        const newNotifications = (transactionAlerts ? '0' : '1').concat(userPreference.generalNotifications.slice(1));
        setTransactionAlerts(!transactionAlerts);
        dispatch(updateUserPreference(userPreference.userID, { generalNotifications: newNotifications } as UserPreferenceData));
    }

    const handleLowBalanceAlerts: () => void = () => {
        const newNotifications = userPreference.generalNotifications.slice(0, 1).concat(lowBalanceAlerts ? '0' : '1') + userPreference.generalNotifications.slice(2, 3);
        setLowBalanceAlerts(!lowBalanceAlerts);
        dispatch(updateUserPreference(userPreference.userID, { generalNotifications: newNotifications } as UserPreferenceData));
    }

    const handleExclusiveOffersAlerts: () => void = () => {
        const newNotifications = userPreference.generalNotifications.slice(0, 2).concat(exclusiveOffersAlerts ? '0' : '1');
        setExclusiveOffersAlerts(!exclusiveOffersAlerts);
        dispatch(updateUserPreference(userPreference.userID, { generalNotifications: newNotifications } as UserPreferenceData));
    }

    const handleOnChange: (name: string, e: React.ChangeEvent<HTMLInputElement>) => void = (name, e) => {
        let newNotificationMethod = "";
        if(name === "email"){
            newNotificationMethod = (e.target.checked ? '1' : '0').concat(userPreference.notificationMethods.slice(1));
        } else {
            newNotificationMethod = userPreference.notificationMethods.slice(0, 1).concat(e.target.checked ? '1' : '0');
        }
        dispatch(updateUserPreference(userPreference.userID, { notificationMethods: newNotificationMethod } as UserPreferenceData));
    }

    const handleSave: () => void = () => {
        if(!Number(lowBalanceValue) || lowBalanceValue < 0 || lowBalanceValue > 1){
            toast.error("Please enter a valid value between 0 and 1");
            return;
        }
        dispatch(updateUserPreference(userPreference.userID, { lowBalance: lowBalanceValue } as UserPreferenceData))
    }

    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        General Notifications
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Notifications about transactions, balance and exclusive offers.
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-row gap-4 items-start justify-between">
                        <button
                            onClick={handleTransactionAlerts}
                            className={`w-7 h-4 p-[1px] flex items-center rounded-full cursor-pointer ${transactionAlerts ? "bg-black" : "bg-gray-400"}`}
                        >
                            <div
                                className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${transactionAlerts ? "translate-x-3" : ""}`}
                            ></div>
                        </button>
                        <div className=" flex flex-col">
                            <div className="text-[13px] font-semibold">
                                Transaction Alerts
                            </div>
                            <div className="text-[12px] text-[#676769]">
                                Receive notifications by email.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-between">
                        <button
                            onClick={handleLowBalanceAlerts}
                            className={`w-7 h-4 p-[1px] flex items-center rounded-full cursor-pointer ${lowBalanceAlerts ? "bg-black" : "bg-gray-400"}`}
                        >
                            <div
                                className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${lowBalanceAlerts ? "translate-x-3" : ""}`}
                            ></div>
                        </button>
                        <div className=" flex flex-col">
                            <div className="text-[13px] font-semibold">
                                Low Balance Alerts
                            </div>
                            <div className="text-[12px] text-[#676769]">
                                Receive notifications by SMS.
                            </div>
                        </div>
                        <div className="flex items-end gap-2">
                            {lowBalanceAlerts &&
                                <div className="ml-4 flex flex-col text-[12px] gap-1">
                                    <label>Fix your low budget (0 to 1)</label>
                                    <input defaultValue={lowBalanceValue} onChange={(e) => setLowBalanceValue(Number(e.target.value))} className="p-1 text-[12px] border-[#DFE1E7] border-2 focus:outline-none rounded-lg"/>
                                </div>
                            }
                            {lowBalanceAlerts && <button onClick={handleSave} className="bg-green-500 px-2 py-[6px] text-[12px] rounded-lg text-white">Save</button>}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-between">
                        <button
                            onClick={handleExclusiveOffersAlerts}
                            className={`w-7 h-4 p-[1px] flex items-center rounded-full cursor-pointer ${exclusiveOffersAlerts ? "bg-black" : "bg-gray-400"}`}
                        >
                            <div
                                className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${exclusiveOffersAlerts ? "translate-x-3" : ""}`}
                            ></div>
                        </button>
                        <div className=" flex flex-col">
                            <div className="text-[13px] font-semibold">
                                Excluseive Offers
                            </div>
                            <div className="text-[12px] text-[#676769]">
                                Receive notifications by SMS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        Notification Method
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose how you prefer to receive notifications.
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex flex-row gap-4 items-start justify-between">
                        <input onChange={(e) => handleOnChange("email", e)} defaultChecked={userPreference.notificationMethods[0] === '1'} type="checkbox" className="mt-1" />
                        <div className=" flex flex-col">
                            <div className="text-[13px] font-semibold">
                                Email Notifications
                            </div>
                            <div className="text-[12px] text-[#676769]">
                                Receive notifications by email.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-start justify-between">
                        <input onChange={(e) => handleOnChange("sms", e)} defaultChecked={userPreference.notificationMethods[1] === '1'} type="checkbox" className="mt-1" />
                        <div className=" flex flex-col">
                            <div className="text-[13px] font-semibold">
                                SMS Notifications
                            </div>
                            <div className="text-[12px] text-[#676769]">
                                Receive notifications by SMS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsNotificationsComponenet;