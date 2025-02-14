import { RiArrowRightSLine } from "react-icons/ri";

const OtherSettingsLocalizationComponent = () => {
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
                    <div className="text-[13px] font-semibold">
                        United States Dollar (USD)
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
                        Timezone
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose your timezone and preferred format.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        GMT - 4:00, 12-hours fomat
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
                        Date Format
                    </div>
                    <div className="text-[12px] text-[#676769]">
                        Choose your preferred data format.
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <div className="text-[13px] font-semibold">
                        DD/MM//YYYY
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

export default OtherSettingsLocalizationComponent;