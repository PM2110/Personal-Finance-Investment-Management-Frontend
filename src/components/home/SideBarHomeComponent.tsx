import { useContext, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { IoMdLink } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { MdAccountBalance, MdLogout, MdNewspaper, MdOutlineFamilyRestroom, MdOutlineHelpOutline } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine, RiTeamLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AppContext } from "../../AppContext";
import { setUser } from "../../redux/userSlice";

interface SideBarSendMoneyComponentProps {
    selected: number;
    setSelected: (value: number) => void;
}

const SideBarHomeComponent: React.FC<SideBarSendMoneyComponentProps> = ({ selected, setSelected }) => {
    
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error("AppContext is null");
    }
    const { setIsLoggedIn } = appContext;
    const [open, setOpen] = useState(true);
    const [visibleSupport, setVisibleSupport] = useState(true);
    const handleVisibleSupport: () => void = () => {
        setVisibleSupport(!visibleSupport);
    }

    return (
        <div className={`flex flex-col gap-8 bg-[#F6F8FA]  h-screen ${open ? "min-w-[180px] sm:min-w-[200px] sm:w-[200px] md:w-[210px] md:min-w-[210px]" : "w-[72px]"} transition-all duration-300 text-[12px] px-4 py-8 lg:text-[14px] text-[#818898]`}>
            <div className={`flex gap-4 ${open ? "flex-row" : "flex-col"} items-center justify-between`}>
                <div className="flex gap-2 items-center">
                    <img src="/Logo.png" alt="Logo" className="w-[40px] h-auto" />
                    {open && (
                        <div className="flex flex-col">
                            <div className="text-black text-[16px]">
                                PFIM
                            </div>
                            <div className="text-[12px]">
                                Finance App
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-white border-2 border-[#DFE1E7] rounded-full p-[3px]" onClick={() => setOpen(!open)}>
                    <RiArrowLeftSLine className={`text-[22px] text-black transition-transform duration-300 ${open ? "" : "rotate-180"}`} />
                </div>
            </div>
            <div className="w-full">
                <div className={`pr-4 sm:pr-7 md:pr-9 lg:pr-11 text-[13px] ${!open && "hidden"}`}>
                    MAIN
                </div>
                <div className="flex flex-col mt-4 gap-2 text-[13px]">
                    <button onClick={() => setSelected(1)} className={`flex gap-3 items-center ${selected === 1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <FiHome className="text-[16px]" />
                        {open && "Dashboard"}
                    </button>
                    <button onClick={() => setSelected(2)} className={`flex gap-3 items-center ${selected === 2 || selected === 2.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <PiMoneyFill className="text-[16px]" />
                        {open && "Budget"}
                    </button>
                    <button onClick={() => setSelected(3)} className={`flex gap-3 items-center ${selected === 3 || selected === 3.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <MdOutlineFamilyRestroom className="text-[16px]" />
                        {open && "Family"}
                    </button>
                    <button onClick={() => setSelected(4)} className={`flex gap-3 items-center ${selected === 4 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <GrTransaction className="text-[16px]" />
                        {open && "Transactions"}
                    </button>
                    <button onClick={() => setSelected(5)} className={`flex gap-3 items-center ${selected === 5 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <MdAccountBalance className="text-[16px]" />
                        {open && "Accounts"}
                    </button>
                    <button onClick={() => setSelected(6)} className={`flex gap-3 items-center ${selected === 6 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <MdNewspaper className="text-[16px]" />
                        {open && "News"}
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className={`pr-4 sm:pr-7 md:pr-9 lg:pr-11 text-[13px] ${!open && "hidden"}`}>
                    OTHER
                </div>
                <div className="flex flex-col mt-4 gap-2 text-[13px]">
                    <button onClick={() => setSelected(7)} className={`flex gap-3 items-center ${selected === 7 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <IoMdLink className="text-[16px]" />
                        {open && "Integrations"}
                    </button>
                    <button onClick={() => setSelected(8)} className={`flex gap-3 items-center ${selected === 8 || selected === 2.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <LuSettings className="text-[16px]" />
                        {open && "Settings"}
                    </button>
                    <button onClick={() => { setIsLoggedIn(false); localStorage.clear(); setUser(null); }} className={`flex gap-3 items-center ${selected === 9 || selected === 3.1 ? "border-[#DFE1E7] border-[2px] rounded-lg bg-white text-black" : "border-[#F6F8FA] border-[2px]"} px-2 py-[6px]`}>
                        <MdLogout className="text-[16px]" />
                        {open && "Log out"}
                    </button>
                </div>
            </div>
            <div className="mt-auto flex flex-col gap-6">
                {visibleSupport && open ? <div className="flex flex-col gap-2 font-normal bg-white p-2 rounded-xl text-[11px]">
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center text-black">
                            <TfiHeadphoneAlt className="text-[12px]"/>
                            Need Support?
                        </div>
                        <RiCloseLine onClick={handleVisibleSupport} className="sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] hover:cursor-pointer text-black" />
                    </div>
                    <div>
                        Contact with one of our experts to get support
                    </div>
                </div> : null}
                <div className={`flex gap-4 ${open ? "flex-row" : "flex-col"} items-center justify-between`}>
                    <div className="flex gap-2 items-center">
                        <div className="border-[#DFE1E7] border-2 p-[2px] rounded-full">
                            <BiUser className="text-[24px]" />
                        </div>
                        {open && (
                            <div className="flex flex-col">
                                <div className="text-black text-[12px]">
                                    Manan Patel
                                </div>
                                <div className="text-[10px]">
                                    manti@gmail.com
                                </div>
                            </div>
                        )}
                    </div>
                    <div onClick={() => setSelected(7)} className="bg-white border-2 border-[#DFE1E7] rounded-full p-[3px]">
                        <RiArrowRightSLine className={`text-[18px] text-black transition-transform duration-300 ${open ? "" : "rotate-180"} hover:cursor-pointer`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarHomeComponent;