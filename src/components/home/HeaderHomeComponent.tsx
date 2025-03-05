import { useState } from "react";
import { RiArrowGoForwardLine, RiNotification2Line, RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import MainBalanceAddForm from "../main/budget/MainBudgetAddForm";
import MainDashboardExchangeForm from "../main/dashboard/MainDashboardExchangeForm";
import MainFamilyAddForm from "../main/family/MainFamilyAddForm";
import MainTransactionAddForm from "../main/transaction/MainTransactionAddForm";
import MainRecipientsAddAccountForm from "../main/recipient/MainRecipientsAddAccountForm";
import { useSelector } from "react-redux";
import { GetConstant } from "../constants"; // Import GetConstant function

interface HeaderHomeComponentProps {
    selected: number,
}

const HeaderHomeComponent: React.FC<HeaderHomeComponentProps> = ({ selected }) => {

    const navigate = useNavigate();
    const { userName } = useSelector((state) => state?.user?.data);
    const [visibleBalanceAddForm, setVisibleBalanceAddForm] = useState(false);
    const [visibleDashboardExchangeForm, setVisibleDashboardExchangeForm] = useState(false);
    const [visibleFamilyAddForm, setVisibleFamilyAddForm] = useState(false);
    const [visibleTransactionAddForm, setVisibleTransactionAddForm] = useState(false);
    const [visibleAccountAddForm, setVisibleAccountAddForm] = useState(false);

    const handleBalanceAddForm = () => setVisibleBalanceAddForm(!visibleBalanceAddForm);
    const handleDashboardExchangeForm = () => setVisibleDashboardExchangeForm(!visibleDashboardExchangeForm);
    const handleFamilyAddForm = () => setVisibleFamilyAddForm(!visibleFamilyAddForm);
    const handleTransactionAddForm = () => setVisibleTransactionAddForm(!visibleTransactionAddForm);
    const handleAccountAddForm = () => setVisibleAccountAddForm(!visibleAccountAddForm);

    const getHeaderTitle = () => {
        switch (selected){
            case 1:
                return GetConstant("YOURFINANCIALDASHBOARD");
            case 2:
                return GetConstant("MYBUDGET");
            case 3:
                return GetConstant("MYFAMILY");
            case 4:
                return GetConstant("ADDTRANSACTION");
            case 5:
                return GetConstant("ADD_ACCOUNT");
            case 6:
                return GetConstant("NEWS");
            case 7:
                return GetConstant("INTEGRATIONS");
            case 8:
                return GetConstant("EXPORT");
            default:
                return ;
        }
    }

    const getHeaderData = () => {
        switch (selected) {
            case 1:
                return `${GetConstant("WELCOME_BACK")}, ${userName}!`;
            case 2:
                return GetConstant("EFFORTLESSLY_MANAGE_FINANCE");
            case 3:
                return GetConstant("ORGANIZE_FAMILY");
            case 4:
                return GetConstant("ORGANIZE_RECEIPTS");
            case 5:
                return GetConstant("ORGANIZE_RECEIPTS");
            case 6:
                return GetConstant("STAY_UPDATED");
            case 7:
                return GetConstant("CONNECT_TO_TOOLS");
            case 8:
                return GetConstant("CUSTOMIZE_DETAILS");
            default:
                return ;
        }
    }

    const getButton = () => {
        switch (selected) {
            case 1:
                return (
                    <button
                        onClick={handleDashboardExchangeForm}
                        className="text-[13px] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer"
                    >
                        {GetConstant("EXCHANGE_RATE")}
                    </button>
                );
            case 2:
                return (
                    <button
                        onClick={handleBalanceAddForm}
                        className="text-[13px] bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer"
                    >
                        {GetConstant("ADDBUDGET")}
                    </button>
                );
            case 3:
                return (
                    <button
                        onClick={handleFamilyAddForm}
                        className="text-[13px] bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer"
                    >
                        {GetConstant("ADDFAMILY")}
                    </button>
                );
            case 4:
                return (
                    <button
                        onClick={handleTransactionAddForm}
                        className="text-[13px] bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer"
                    >
                        {GetConstant("ADDTRANSACTIONBUTTON")}
                    </button>
                );
            case 5:
                return (
                    <button
                        onClick={handleAccountAddForm}
                        className="text-[13px] bg-black text-white px-3 py-2 rounded-lg hover:cursor-pointer"
                    >
                        {GetConstant("ADD_ACCOUNT")}
                    </button>
                );
            case 6:
            case 7:
                return (
                    <button className="flex items-center gap-2 text-white text-[13px] px-3 py-2 rounded-lg">
                        <RiArrowGoForwardLine className="text-[14px]" /> {GetConstant("EXPORT")}
                    </button>
                );
            case 8:
                return (
                    <button className="flex items-center gap-2 text-[13px] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg hover:bg-black hover:border-black hover:text-white hover:cursor-pointer">
                        <RiArrowGoForwardLine className="text-[14px]" /> {GetConstant("EXPORT")}
                    </button>
                );
        }
    }

    return (
        <div className="relative flex flex-row w-full justify-between sm:items-start items-center">
            <div className="flex gap-3">
                <div className="flex flex-col justify-center">
                    <div className="sm:text-[16px] md:text-[15px] lg:text-[16px]">
                        {getHeaderTitle()}
                    </div>
                    <div className="sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#666D80]">
                        {getHeaderData()}
                    </div>
                </div>
            </div>
            <div className="min-w-1/2 lg:min-w-auto justify-end flex items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10">
                <RiSearchLine onClick={() => navigate("/")} className="sm:text-[16px] md:text-[17px] lg:text-[18px] hover:cursor-pointer" />
                <RiNotification2Line onClick={() => navigate("/")} className="sm:text-[16px] md:text-[17px] lg:text-[18px] hover:cursor-pointer" />
                {getButton()}
            </div>
            {(visibleBalanceAddForm || visibleDashboardExchangeForm || visibleFamilyAddForm || visibleTransactionAddForm || visibleAccountAddForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            <MainBalanceAddForm isVisible={visibleBalanceAddForm} onClose={handleBalanceAddForm} />
            <MainDashboardExchangeForm isVisible={visibleDashboardExchangeForm} onClose={handleDashboardExchangeForm} />
            <MainFamilyAddForm isVisible={visibleFamilyAddForm} onClose={handleFamilyAddForm} />
            <MainTransactionAddForm isVisible={visibleTransactionAddForm} onClose={handleTransactionAddForm} />
            <MainRecipientsAddAccountForm isVisible={visibleAccountAddForm} onClose={handleAccountAddForm} />
        </div>
    );
}

export default HeaderHomeComponent;
