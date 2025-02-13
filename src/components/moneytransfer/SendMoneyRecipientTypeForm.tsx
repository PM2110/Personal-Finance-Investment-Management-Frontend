import { FaUserCircle } from "react-icons/fa";
import { RiBriefcaseFill, RiTeamFill } from "react-icons/ri";

interface SideBarSendMoneyComponentProps {
    selected: number;
    setSelected: (value: number) => void;
}

const SendMoneyRecipientTypeForm: React.FC<SideBarSendMoneyComponentProps> = ({ setSelected }) => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl p-4 border-2">
            <div className="flex flex-col gap-3 w-full text-[14px]">
                <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                    <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                        <FaUserCircle className="text-[16px]" />
                    </div>
                    <div className="w-full">
                        <div className="font-bold flex justify-between">
                            Personal
                            <input type="checkbox"/>
                        </div>
                        <div className="text-[12px] text-[#666D80]">
                            Send, spend & receive around the world for less
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                    <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                        <RiTeamFill className="text-[16px]" />
                    </div>
                    <div className="w-full">
                        <div className="font-bold flex justify-between">
                            Someone Else
                            <input type="checkbox"/>
                        </div>
                        <div className="text-[12px] text-[#666D80]">
                            Do business or freelance work internationally
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 p-2 items-center justify-between min-w-full border-[#DFE1E7] border-2 hover:border-black hover:cursor-pointer rounded-lg">
                    <div className="border-[#DFE1E7] border-2 p-3 rounded-full">
                        <RiBriefcaseFill className="text-[16px]" />
                    </div>
                    <div className="w-full">
                        <div className="font-bold flex justify-between">
                            Buisness or Charity
                            <input type="checkbox"/>
                        </div>
                        <div className="text-[12px] text-[#666D80]">
                            Do business or freelance work internationally
                        </div>
                    </div>
                </div>
                <div className="mt-1 h-[1px] bg-[#DFE1E7]"></div>
                <button onClick={() => setSelected(3.1)} className="mt-1 bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:cursor-pointer hover:text-black rounded-lg">
                    Continue
                </button>
            </div>
        </div>
    );
}

export default SendMoneyRecipientTypeForm;