import HeaderSignUpComponent from "../components/signup/HeaderSignUpComponent";
import SignUpForm from "../components/signup/SignUpForm";
// import EmailVerificationComponent from "../components/signup/EmailVerificationComponent";
// import EmailVerifiedComponent from "../components/signup/EmailVerifiedComponent";
import FooterSignUpComponent from "../components/signup/FooterSignUpComponent";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderSignUpComponent />
            <SignUpForm />
            {/* <EmailVerificationComponent /> */}
            {/* <EmailVerifiedComponent /> */}
            <FooterSignUpComponent />
        </div>
    );
}

export default SignUpPage;