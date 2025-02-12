import { RiArrowRightWideLine, RiFlagLine, RiPhoneLockLine, RiUserLine } from "react-icons/ri";

const HeaderAccountComponent = () => {
    return (
        <div className="flex w-full justify-between items-center h-auto bg-transparent">
            <img src="/Logo.png" alt="Logo" className="w-[40px] h-auto" />
            <div className="flex text-[12px] gap-4 items-center">
                <button className={`border-[#DFE1E7] text-[#666D80] border-2 rounded-2xl pl-[2px] py-[2px] pr-[8px]`}>
                    <div className="flex items-center gap-1">
                        <div className={`border-[#DFE1E7] border-2 rounded-full p-[3px]`}>
                            <RiUserLine />
                        </div>
                        Account Type
                    </div>
                </button>
                <RiArrowRightWideLine className={`text-[#666D80] text-[15px]`} />
                <button className={`border-[#DFE1E7] text-[#666D80] border-2 rounded-2xl pl-[2px] py-[2px] pr-[8px]`}>
                    <div className="flex items-center gap-1">
                        <div className={`border-[#DFE1E7] border-2 rounded-full p-[3px]`}>
                            <RiFlagLine />
                        </div>
                        Country
                    </div>
                </button>
                <RiArrowRightWideLine className={`text-[#666D80] text-[15px]`} />
                <button className={`border-[#DFE1E7] text-[#666D80] border-2 rounded-2xl pl-[2px] py-[2px] pr-[8px]`}>
                    <div className="flex items-center gap-1">
                        <div className={`border-[#DFE1E7] border-2 rounded-full p-[3px]`}>
                            <RiPhoneLockLine />
                        </div>
                        2FA
                    </div>
                </button>
            </div>
            <div>
                <select className="p-1 text-[12px] bg-white border-[#DFE1E7] border-[2px] rounded-md">
                    <option value="Eng">ENG</option>
                    <option value="Hin">HIN</option>
                </select>
            </div>
        </div>
    );
}

export default HeaderAccountComponent;