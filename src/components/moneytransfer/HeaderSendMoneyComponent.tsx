import { RiCheckboxCircleFill, RiCloseLine, RiFileSearchFill, RiMoneyRupeeCircleFill, RiTeamFill, RiUserSharedFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface HeaderSendMoneyComponentProps {
    selected: number,
    // setSelected: (value: number) => void,
}

const HeaderSendMoneyComponent: React.FC<HeaderSendMoneyComponentProps> = ({ selected }) => {

    const navigate: (path :string) => void = useNavigate();

    const getHeaderLogo = () => {
        switch (selected){
            case 1:
                return <RiMoneyRupeeCircleFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 2:
                return <RiTeamFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 2.1:
                return <RiTeamFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 3:
                return <RiUserSharedFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 3.1:
                return <RiUserSharedFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 4:
                return <RiFileSearchFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            case 5:
                return <RiCheckboxCircleFill className="text-[16px] md:text-[17px] lg:text-[18px]" />
            default:
                return ;
        }
    }

    const getHeaderTitle = () => {
        switch (selected){
            case 1:
                return "Amount"
            case 2:
                return "Personal Details"
            case 2.1:
                return "Personal Details"
            case 3:
                return "Recipient"
            case 3.1:
                return "Recipient"
            case 4:
                return "Review and Pay"
            case 5:
                return "Success"
            default:
                return ;
        }
    }

    const getHeaderData = () => {
        switch (selected){
            case 1:
                return "Enter the desired amount to proceed with your transaction"
            case 2:
                return "Please select the type (personal or buisness) and fill in your details"
            case 2.1:
                return "Kindly fill out the following fields with your personal details"
            case 3:
                return "Choose your recipient you want for"
            case 3.1:
                return "Provide recipient details to finalize the money transfer process"
            case 4:
                return "Please review before you pay"
            case 5:
                return "Hooray, Your transaction is complete"
            default:
                return ;
        }
    }
    
    return (
        <div className="flex flex-row w-full justify-between items-center px-4 py-10">
            <div className="flex gap-3">
                <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                    <div className="bg-white p-[10px] rounded-full">
                        {getHeaderLogo()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="font-bold sm:text-[14px] md:text-[15px] lg:text-[16px]">
                        {getHeaderTitle()}
                    </div>
                    <div className="sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#666D80]">
                        {getHeaderData()}
                    </div>
                </div>
            </div>
            <div className="border-[#DFE1E7] border-2 rounded-full p-1">
                <RiCloseLine onClick={() => navigate("/")} className="sm:text-[16px] md:text-[17px] lg:text-[18px] hover:cursor-pointer" />
            </div>
        </div>
    );
}

export default HeaderSendMoneyComponent;