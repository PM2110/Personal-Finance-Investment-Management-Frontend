import HeaderAccountComponent from "../components/account/HeaderAccountComponent";
// import AccountTypeForm from "../components/account/AccountTypeForm";
// import AccountCountryForm from "../components/account/AccountCountryForm";
// import AccountPhoneForm from "../components/account/AccountPhoneForm";
import FooterAccountComponent from "../components/account/FooterAccountComponent";
import AccountCodeForm from "../components/account/AccountCodeForm";

const AddAccountPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderAccountComponent />
            {/* <AccountTypeForm /> */}
            {/* <AccountCountryForm /> */}
            {/* <AccountPhoneForm /> */}
            <AccountCodeForm />
            <FooterAccountComponent />
        </div>
    );
}

export default AddAccountPage;