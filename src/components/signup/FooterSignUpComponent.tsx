import { RiCopyrightLine } from "react-icons/ri";

const FooterSignUpComponent = () => {
    return (
        <div className="flex flex-row justify-between w-full text-[14px] text-[#666D80]">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-[2px]">
                    <RiCopyrightLine />
                    2025
                </div>
                <div>
                    Personal Finance & Investment Manager
                </div>
            </div>
            <div>
                <select className="p-1 text-[12px] bg-white border-[#DFE1E7] border-[2px] rounded-lg">
                    <option value="Eng">ENG</option>
                    <option value="Hin">HIN</option>
                </select>
            </div>
        </div>
    );
}

export default FooterSignUpComponent;