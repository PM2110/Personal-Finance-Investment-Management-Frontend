import { RiFilter3Line, RiSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { AccountData, deleteAccount } from "../../../redux/accountSlice";
import MainAccountCardComponent from "./MainAccountCardComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import MainEditAccountForm from "./MainEditAccountForm";

const MainRecipientsComponent = () => {

    const dispatch = useDispatch<AppDispatch>();

    const accounts: AccountData[] = useSelector((state) => state.account.data);

    const [selectedAccount, setSelectedAccount] = useState<AccountData>();
    const [visibleAccountEditForm, setVisibleAccountEditForm] = useState(false);

    const handleVisibleEditform: () => void = () => {
        setVisibleAccountEditForm(!visibleAccountEditForm);
    }

    const handleDelete: (accountID: number) => void = (accountID: number) => {
        try {
            dispatch(deleteAccount(accountID));
            toast.success("Account deleted successfully.");
        } catch (error) {
            toast.error("Error while deleting account.");
            console.log("Error while deleting account ", error);
        }
    }

    return (
        <div className="flex w-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full">
            <div className="flex flex-col gap-4 h-full w-full">
                <div className="flex flex-col lg:flex-row w-full gap-3 items-start justify-between text-[14px]">
                    <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                        <RiSearchLine className="text-[16px]"/>
                        <input className="focus:outline-none" placeholder="Search"/>
                    </div>
                    <button className="flex items-center gap-2 border-[#DFE1E7] border-2 px-4 py-2 rounded-lg hover:cursor-pointer">
                        <RiFilter3Line className="text-[16px]"/>
                        Filter
                    </button>
                </div>
                <div className={`${accounts && accounts.length !== 0 ? "grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-2 xl:gap-4" : "h-full w-full"} `}>
                    {accounts && accounts.length !== 0 ? accounts.map((account: AccountData, index: number) => (
                        <MainAccountCardComponent key={index} account={account} setSelectedAccount={setSelectedAccount} handleDelete={handleDelete} handleVisibleEdit={handleVisibleEditform} />
                    )) : <div className="flex items-center justify-center h-full w-full text-[#666D80]">No accounts found.</div>}
                </div>
            </div>
            {(visibleAccountEditForm) && (
                <div className="fixed inset-0 bg-black/70 z-10"></div>
            )}
            {visibleAccountEditForm && <MainEditAccountForm isVisible={visibleAccountEditForm} onClose={handleVisibleEditform} account={selectedAccount} />}
        </div>
    );
}

export default MainRecipientsComponent;