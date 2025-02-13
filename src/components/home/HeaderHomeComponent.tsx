import { RiArrowGoForwardLine, RiNotification2Line, RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface HeaderHomeComponentProps {
    selected: number,
    // setSelected: (value: number) => void,
}

const HeaderHomeComponent: React.FC<HeaderHomeComponentProps> = ({ selected }) => {

    const navigate: (path :string) => void = useNavigate();

    const getHeaderTitle = () => {
        switch (selected){
            case 1:
                return "Your Financial Dashboard"
            case 2:
                return "My Balance"
            case 3:
                return "My Card"
            case 4:
                return "Transactions"
            case 5:
                return "Recipients"
            case 6:
                return "Integrations"
            case 7:
                return "Settings"
            default:
                return ;
        }
    }

    const getHeaderData = () => {
        switch (selected){
            case 1:
                return "Welcome back, Manan Patel!"
            case 2:
                return "Effortlessly manage and monitor your financial resources with ease"
            case 3:
                return "Organize and access your payment cards"
            case 4:
                return "Efficiently organize and keep track of your incoming receipts for hassel-free financial management"
            case 5:
                return "Efficiently organize and keep track of your incoming receipts for hassel-free financial management"
            case 6:
                return "Connect and sync with essential tools and platforms"
            case 7:
                return "Customize and edit essential details";
            default:
                return ;
        }
    }

    const getButton = () => {
        switch (selected){
            case 1:
                return <button className="text-[13px] font-bold border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer">Exchange Rate</button>
            case 2:
                return <button className="text-[13px] font-bold bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer">Add Balance</button>
            case 3:
                return <button className="text-[13px] font-bold bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer">Add Card</button>
            case 5:
                return <button className="text-[13px] font-bold bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer">Add Your Bank Account</button>
            case 7:
                return <button className="flex items-center gap-2 text-[13px] font-bold border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer"><RiArrowGoForwardLine className="text-[14px]"/> Export</button>
        }
    }
    
    return (
        <div className="flex flex-row w-full justify-between sm:items-start items-center">
            <div className="flex gap-3">
                <div className="flex flex-col justify-center">
                    <div className="font-bold sm:text-[16px] md:text-[15px] lg:text-[16px]">
                        {getHeaderTitle()}
                    </div>
                    <div className="sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#666D80]">
                        {getHeaderData()}
                    </div>
                </div>
            </div>
            <div className="min-w-1/2 lg:min-w-auto justify-end flex items-center sm:gap-6 md:gap-7 lg:gap-8">
                <RiSearchLine onClick={() => navigate("/")} className="sm:text-[16px] md:text-[17px] lg:text-[18px] hover:cursor-pointer" />
                <RiNotification2Line onClick={() => navigate("/")} className="sm:text-[16px] md:text-[17px] lg:text-[18px] hover:cursor-pointer" />
                {getButton()}
            </div>
        </div>
    );
}

export default HeaderHomeComponent;