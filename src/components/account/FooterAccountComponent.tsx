import { RiCopyrightLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const FooterAccountComponent = () => {
    return (
        <div className="flex flex-row justify-between w-full text-[12px] text-[#666D80]">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-[2px]">
                    <RiCopyrightLine />
                    2025
                </div>
                <div>
                    Personal Finance & Investment Manager
                </div>
            </div>
            <button className="flex gap-2 justify-center bg-white border-[#DFE1E7] border-2 px-[8px] pt-[6px] pb-[3px] rounded-md font-bold text-black text-[10px]"><TfiHeadphoneAlt className="text-[12px]"/>Get Help</button>
        </div>
    );
}

export default FooterAccountComponent;