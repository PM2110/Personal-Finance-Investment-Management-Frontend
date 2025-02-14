import { useState } from "react";

const OtherSettingsNotificationsComponenet = () => {
    
    const [transactionAlerts, setTransactionAlerts] = useState(false);
    const [lowBalanceAlerts, setLowBalanceAlerts] = useState(false);
    const [exclusiveOffersAlerts, setExclusiveOffersAlerts] = useState(false);

    const handleTransactionAlerts: () => void = () => {
        setTransactionAlerts(!transactionAlerts);
    }

    const handleLowBalanceAlerts: () => void = () => {
        setLowBalanceAlerts(!lowBalanceAlerts);
    }

    const handleExclusiveOffersAlerts: () => void = () => {
        setExclusiveOffersAlerts(!exclusiveOffersAlerts);
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
                        <input type="checkbox" className="mt-1" />
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
                        <input type="checkbox" className="mt-1" />
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