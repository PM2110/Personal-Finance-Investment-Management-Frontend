import { updateUserPreference, UserPreferenceData } from "../../../redux/userPreferenceSlice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

interface OtherSettingsLocalizationComponentProps {
    userPreference: UserPreferenceData;
}

const OtherSettingsLocalizationComponent: React.FC<OtherSettingsLocalizationComponentProps> = ({ userPreference }) => {

    const dispatch = useDispatch<AppDispatch>();
    
    const handleCurrencyChange: (e: ChangeEvent<HTMLSelectElement>) => void = (e) => {
        dispatch(updateUserPreference(userPreference.userID, { currency: e.target.value } as UserPreferenceData));
    }

    const handleTimeZoneChange: (e: ChangeEvent<HTMLSelectElement>) => void = (e) => {
        dispatch(updateUserPreference(userPreference.userID, { timeZone: e.target.value } as UserPreferenceData));
    }

    const handleDateFormatChange: (e: ChangeEvent<HTMLSelectElement>) => void = (e) => {
        dispatch(updateUserPreference(userPreference.userID, { dateFormat: e.target.value } as UserPreferenceData));
    }

    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Currency
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose your preferred currency.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <select onChange={handleCurrencyChange} defaultValue={userPreference.currency} className="text-[13px] border-[#DFE1E7] border-2 p-1 rounded-lg">
                        <option value="GBP">United Kingdom Pound Sterling</option>
                        <option value="INR">Indian Rupee</option>
                        <option value="USD">United States Dollar</option>
                    </select>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Timezone
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose your timezone and preferred format.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <select onChange={handleTimeZoneChange} defaultValue={userPreference.timeZone} className="text-[13px] border-[#DFE1E7] border-2 p-1 rounded-lg">
                        <option value="UTC+00:00, 12">UTC+00.00, 12-Hours Format</option>
                        <option value="UTC+05:30, 12">UTC+05:30, 12-Hours Format</option>
                        <option value="UTC+00:00, 24">UTC+00.00, 24-Hours Format</option>
                        <option value="UTC+05:30, 24">UTC+05:30, 24-Hours Format</option>
                    </select>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Date Format
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose your preferred data format.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <select onChange={handleDateFormatChange} defaultValue={userPreference.dateFormat} className="text-[13px] border-[#DFE1E7] border-2 p-1 rounded-lg">
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="DD-MM-YY">DD-MM-YY</option>
                        <option value="YYYY/MM/DD">YYYY/MM/DD</option>
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsLocalizationComponent;