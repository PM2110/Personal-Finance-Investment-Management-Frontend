import { useState } from "react";
import OtherSettingsAccountComponent from "./OtherSettingsAccountComponent";
import OtherSettingsSettingComponent from "./OtherSettingsSettingComponent";
import OtherSettingsNotificationsComponenet from "./OtherSettingsNotificationsComponent";
import OtherSettingsPrivacySecurityComponent from "./OtherSettingsPrivacySecurityComponent";
import OtherSettingsLocalizationComponent from "./OtherSettingsLocalizationComponent";
import { useSelector } from "react-redux";

const OtherSettingsComponent = () => {
    
    const [selected, setSelected] = useState(1);
    const user = useSelector((state) => state.user.data);
    const userPreference = useSelector((state) => state.userPreference.data);
    console.log(userPreference, user);

    const getForm = () => {
        switch (selected) {
            case 1:
                return <OtherSettingsAccountComponent user={user}/>
            case 2:
                return <OtherSettingsSettingComponent userPreference={userPreference}/>
            case 3:
                return <OtherSettingsNotificationsComponenet userPreference={userPreference}/>
            case 4:
                return <OtherSettingsPrivacySecurityComponent />
            case 5:
                return <OtherSettingsLocalizationComponent userPreference={userPreference} />
        }
    }
    
    return (
        <div className="w-full flex flex-col gap-5 sm:gap-6 md-gap-8 overflow-y-hidden">
            <div className="w-auto flex flex-row lg:flex-row sm:gap-4 justify-start text-[#818898] text-[12px] border-[#DFE1E6] border-b-1">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "px-5 py-2 text-black border-b-[2px] font-bold" : "px-5 py-2 border-b-2 border-white font-bold"}`}>Account</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "px-5 py-2 text-black border-b-[2px] font-bold" : "px-5 py-2 border-b-2 border-white font-bold"}`}>Settings</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "px-5 py-2 text-black border-b-[2px] font-bold" : "px-5 py-2 border-b-2 border-white font-bold"}`}>Notifications</button>
                    <button onClick={() => setSelected(4)} className={`${selected === 4 ? "px-5 py-2 text-black border-b-[2px] font-bold" : "px-5 py-2 border-b-2 border-white font-bold"}`}>Privacy & Security</button>
                    <button onClick={() => setSelected(5)} className={`${selected === 5 ? "px-5 py-2 text-black border-b-[2px] font-bold" : "px-5 py-2 border-b-2 border-white font-bold"}`}>Localization</button>
            </div>
            {getForm()}
        </div>
    );
}

export default OtherSettingsComponent;