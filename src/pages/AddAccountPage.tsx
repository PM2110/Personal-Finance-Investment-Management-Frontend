import HeaderAccountComponent from "../components/account/HeaderAccountComponent";
import AccountForm from "../components/account/AccountForm";
import FooterAccountComponent from "../components/account/FooterAccountComponent";

const AddAccountPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderAccountComponent />
            <AccountForm />
            <FooterAccountComponent />
        </div>
    );
}

export default AddAccountPage;