import { BiUser } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

const OtherSettingsAccountComponent = () => {
    return (
        <div className="w-full flex flex-col gap-6 overflow-y-auto p-2">
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Profile Photo
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
                        Change
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Full Name
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official full name for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        Manan Patel
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium">
                        Edit
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Email Address
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official email address for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        pmpatelmanan21@gmail.com
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium">
                        Edit
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[50%] sm:w-[50%] md:w-[50%] lg:w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Phone Number
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official phone number for billings and contact requests.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        +91-98981234
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium">
                        Edit
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-[#DFE1E7]"></div>
            <div className="w-full flex gap-8">
                <div className="w-[80%] sm:max-lg:min-w-[50%] md:w-[50%] lg:min-[30.8%] lg:w-[30.8%] xl:min-w-[30.8%] flex flex-col justify-between">
                    <div className="text-[13px] font-semibold">
                        Address
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        The official residencial address for billing details and shipments.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        2-102, Swagat Blossom-2BHK, Sarghasan, Gandhinagar
                    </div>
                    <button className="flex items-center gap-3 text-[12px] font-medium">
                        Edit
                        <RiArrowRightSLine className="text-[13px] text-black"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OtherSettingsAccountComponent;