// import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { GoCreditCard } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoMdLink } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import { RiArrowLeftSLine, RiTeamLine } from "react-icons/ri";

interface SideBarSendMoneyComponentProps {
    selected: number;
    setSelected: (value: number) => void;
}

const SideBarHomeComponent: React.FC<SideBarSendMoneyComponentProps> = ({ selected, setSelected }) => {
    
    // const [open, isOpen] = useState(true);
    
    return (
        <div className="flex flex-col gap-8 bg-[#F6F8FA] font-bold h-screen w-[300px] text-[12px] px-4 py-8 md:w-[350px] md:[text-13px] lg:text-[14px] text-[#818898]">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img src="/Logo.png" alt="Logo" className="w-[40px] h-auto" />
                    <div className="flex flex-col">
                        <div className="text-black text-[16px]">
                            PFIM
                        </div>
                        <div className="text-[12px]">
                            Fianance App
                        </div>
                    </div>
                </div>
                <div className="bg-white border-2 border-[#DFE1E7] rounded-full p-[3px]">
                    <RiArrowLeftSLine className="text-[22px] text-black"/>
                </div>
            </div>
            <div className="w-full">
                <div className="pr-4 sm:pr-7 md:pr-9 lg:pr-11 text-[13px]">
                    MAIN
                </div>
                <div className="flex flex-col mt-4 gap-2 text-[13px]">
                    <button onClick={() => setSelected(1)} className={`flex gap-3 items-center ${selected === 1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <FiHome className="text-[16px]"/>
                        Dashboard
                    </button>
                    <button onClick={() => setSelected(2)} className={`flex gap-3 items-center ${selected === 2 || selected === 2.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <PiMoneyFill className="text-[16px]"/>
                        Balance
                    </button>
                    <button onClick={() => setSelected(3)} className={`flex gap-3 items-center ${selected === 3 || selected === 3.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <GoCreditCard className="text-[16px]" />
                        Cards
                    </button>
                    <button onClick={() => setSelected(4)} className={`flex gap-3 items-center ${selected === 4 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <GrTransaction className="text-[16px]"/>
                        Transactions
                    </button>
                    <button onClick={() => setSelected(5)} className={`flex gap-3 items-center ${selected === 5 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <RiTeamLine className="text-[16px]"/>
                        Recipients
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="pr-4 sm:pr-7 md:pr-9 lg:pr-11 text-[13px]">
                    OTHER
                </div>
                <div className="flex flex-col mt-4 gap-2 text-[13px]">
                    <button onClick={() => setSelected(6)} className={`flex gap-3 items-center ${selected === 6 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <IoMdLink className="text-[16px]"/>
                        Integrations
                    </button>
                    <button onClick={() => setSelected(7)} className={`flex gap-3 items-center ${selected === 7 || selected === 2.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <LuSettings className="text-[16px]"/>
                        Settings
                    </button>
                    <button onClick={() => setSelected(8)} className={`flex gap-3 items-center ${selected === 8 || selected === 3.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]" } px-2 py-[6px]`}>
                        <MdOutlineHelpOutline className="text-[16px]" />
                        Get Help
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideBarHomeComponent;