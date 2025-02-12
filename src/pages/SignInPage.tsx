import HeaderSignInComponent from "../components/signin/HeaderSignInComponent";
import SignInForm from "../components/signin/SignInForm";
// import ForgotPasswordForm from "../components/signin/ForgotPasswordForm";
// import SuccessLinkSentComponent from "../components/signin/SuccessLinkSentComponent";
import FooterSignInComponent from "../components/signin/FooterSignInComponent";

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderSignInComponent />
            <SignInForm />
            {/* <ForgotPasswordForm /> */}
            {/* <SuccessLinkSentComponent /> */}
            <FooterSignInComponent />
        </div>
    );
}

export default SignInPage;