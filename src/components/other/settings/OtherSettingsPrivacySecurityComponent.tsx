import { GoShieldLock } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { GetConstant } from "../../constants";

const OtherSettingsPrivacySecurityComponent = () => {
    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("CHANGE_PASSWORD_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("CHANGE_PASSWORD_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex gap-3 bg-[#F6F8FA] text-[#A4ACB9] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg text-[17px] hover:cursor-not-allowed">
                        <RiLockPasswordLine />
                        <input disabled value={"••••••••••••••"} className="tracking-widest flex items-center gap-3 text-[12px] font-medium" />
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        {GetConstant("CHANGE_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("BACKUP_CODES_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("BACKUP_CODES_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        {GetConstant("GENERATE_CODES_LABEL")}
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        {GetConstant("TWO_STEP_VERIFICATION_LABEL")}
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        {GetConstant("TWO_STEP_VERIFICATION_DESCRIPTION_LABEL")}
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex gap-2 items-center">
                        <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[4px] rounded-full">
                            <div className="bg-white p-[6px] rounded-full">
                                <GoShieldLock className="text-[16px]" />
                            </div>
                        </div>
                        <div className="text-[14px] font-bold">
                            {GetConstant("AUTHENTICATOR_APP_LABEL")}
                        </div>
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        {GetConstant("CHANGE_LABEL")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsPrivacySecurityComponent;
