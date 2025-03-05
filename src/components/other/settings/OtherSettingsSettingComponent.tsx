import { updateUserPreference, UserPreferenceData } from "../../../redux/userPreferenceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { ChangeEvent } from "react";
import { GetConstant } from "../../constants";

interface OtherSettingsSettingComponentProps {
    userPreference: UserPreferenceData;
}

const OtherSettingsSettingComponent: React.FC<OtherSettingsSettingComponentProps> = ({ userPreference }) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleOnLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateUserPreference(userPreference.userID, { language: e.target.value } as UserPreferenceData));
    };

    const handleOnThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateUserPreference(userPreference.userID, { theme: e.target.value } as UserPreferenceData));
    }

    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("LANGUAGE_SETTINGS_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("LANGUAGE_SETTINGS_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <select onChange={handleOnLanguageChange} defaultValue={userPreference.language} className="text-[13px] border-[#DFE1E7] border-2 p-1 rounded-lg">
                        <option value="En(US)">English (US)</option>
                        <option value="En(UK)">English (UK)</option>
                        <option value="Hin">Hindi</option>
                        <option value="Guj">Gujarati</option>
                        <option value="Fr">French</option>
                        <option value="Ja">Japanese</option>
                    </select>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("THEME_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("THEME_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <select onChange={handleOnThemeChange} defaultValue={userPreference.theme} className="text-[13px] border-[#DFE1E7] border-2 p-1 rounded-lg">
                        <option value="Light">Light</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("WEB_CONTACTS_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("WEB_CONTACTS_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">
                        {GetConstant("OPEN_WEB_CONTACTS_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("API_TOKEN_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("API_TOKEN_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">
                        {GetConstant("OPEN_API_TOKEN_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:max-lg:min-w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("SECURE_COMMUNICATION_CODE_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("SECURE_COMMUNICATION_CODE_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">
                        {GetConstant("CREATE_COMMUNICATION_CODE_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>

            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:max-lg:min-w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("CLOSE_ACCOUNT_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="flex items-center gap-3 bg-red-500 px-4 py-2 rounded-lg text-[12px] text-white font-medium">
                        {GetConstant("CLOSE_LABEL")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsSettingComponent;
