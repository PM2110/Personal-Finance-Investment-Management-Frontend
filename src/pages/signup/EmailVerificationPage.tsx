import EmailVerificationComponent from "../../components/signup/EmailVerificationComponent";
import FooterSignUpComponent from "../../components/signup/FooterSignUpComponent";
import HeaderSignUpComponent from "../../components/signup/HeaderSignUpComponent";

const EmailVerificationPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderSignUpComponent />
            <EmailVerificationComponent />
            <FooterSignUpComponent />
        </div>
    );
}

export default EmailVerificationPage;