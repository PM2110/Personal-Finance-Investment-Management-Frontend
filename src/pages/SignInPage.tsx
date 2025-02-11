import HeaderSignInComponent from "../components/signin/HeaderSignInComponent";
import SignInForm from "../components/signin/SignInForm";
import FooterSignInComponent from "../components/signin/FooterSignInComponent";

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-[#F6F8FA] h-screen w-screen py-[32px] px-[60px]">
            <HeaderSignInComponent />
            <SignInForm />
            <FooterSignInComponent />
        </div>
    );
}

export default SignInPage;