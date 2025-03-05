import { updateUserPreference, UserPreferenceData } from "../../../redux/userPreferenceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { ChangeEvent } from "react";

interface OtherSettingsSettingComponentProps {
    userPreference: UserPreferenceData,
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
                        Language Settings
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Display the app in your selected language.
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
                        Theme
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Set unique code that appears on all PFIM communications from us to you.
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
                        Web Contacts
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Set unique code that appears on all PFIM communications from us to you.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">Open Web Contacts</button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        API Token
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Set unique code that appears on all PFIM communications from us to you.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">Open API Token</button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:max-lg:min-w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Secure Communication Code
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Set unique code that appears on all PFIM communications from us to you.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border-[#DFE1E7] border-2 p-2 rounded-lg text-[12px]">Create Communication Code</button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:max-lg:min-w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Close Your Account
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="flex items-center gap-3 bg-red-500 px-4 py-2 rounded-lg text-[12px] text-white font-medium">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsSettingComponent;