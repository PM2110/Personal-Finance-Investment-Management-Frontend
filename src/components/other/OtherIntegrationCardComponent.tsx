import { useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import { VscDebugDisconnect } from "react-icons/vsc";
import Switch from "react-switch";

interface OtherIntegrationCardComponentProps {
    logo: React.ReactNode,
    name: string,
    connected: boolean,
    about: string
}

const OtherIntegrationCardComponent: React.FC<OtherIntegrationCardComponentProps> = ({ logo, name, connected, about }) => {

    const [checked, setChecked] = useState(connected);
    
    const handleChange: (checked: boolean) => void = (checked) => {
        setChecked(checked);
    };

    return (
        <div className="flex flex-col gap-2 border-[#DFE1E7] border-2 rounded-lg text-[14px] p-3">
            <div className="flex justify-between items-start">
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[8px] rounded-full">
                    <div className="bg-white p-[8px] rounded-full">
                        {logo}
                    </div>
                </div>
                <div className="border-[#DFE1E7] text-[12px] border-2 p-[6px] rounded-full">
                    <AiOutlineExport />
                </div>
            </div>
            <div className="font-bold">
                {name}
            </div>
            <div className=" mb-2 text-[#666D80] text-[12px]">
                {about}
            </div>
            <div className="flex justify-between mt-auto">
                <button className="flex gap-2 items-center text-[12px] font-bold border-[#DFE1E7] border-2 px-3 py-1 rounded-lg"><VscDebugDisconnect /> Connect</button>
                <Switch onChange={handleChange} checked={checked} />
            </div>
        </div>
    );
}

export default OtherIntegrationCardComponent;