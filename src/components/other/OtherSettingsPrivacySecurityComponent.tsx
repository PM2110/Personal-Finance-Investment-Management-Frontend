import { GoShieldLock } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";

const OtherSettingsPrivacySecurityComponent = () => {
    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        Change Password
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Change your password if you think your password is not protected.
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="flex gap-3 bg-[#F6F8FA] text-[#A4ACB9] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg text-[17px] hover:cursor-not-allowed">
                        <RiLockPasswordLine />
                        <input disabled value={"••••••••••••••"} className="tracking-widest flex items-center gap-3 text-[12px] font-medium" />
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        Change
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        Backup Codes
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Create and store new backup codes for use in the event of loosing access to your authentication app.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        Generate Codes
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col gap-1">
                    <div className="text-[13px] font-semibold">
                        Two Step Verification
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        We use two step verification when we need to check it's really you using your account.
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
                            Authenticator App
                        </div>
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium border-[#DFE1E7] border-2 px-5 py-2 rounded-lg">
                        Change
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsPrivacySecurityComponent;