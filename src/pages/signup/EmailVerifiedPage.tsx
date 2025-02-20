import EmailVerifiedComponent from "../../components/signup/EmailVerifiedComponent";
import FooterSignUpComponent from "../../components/signup/FooterSignUpComponent";
import HeaderSignUpComponent from "../../components/signup/HeaderSignUpComponent";

const EmailVerifiedPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderSignUpComponent />
            <EmailVerifiedComponent />
            <FooterSignUpComponent />
        </div>
    );
}

export default EmailVerifiedPage;