import { Link } from "react-router-dom";

const HeaderSignUpComponent = () => {
    return (
        <div className="flex w-full justify-between items-center h-auto bg-transparent">
            <img src="/Logo.png" alt="Logo" className="w-[40px] h-auto" />
            <div className="flex gap-[8px] items-center text-[12px]">
                <div className="text-[#666D80]">Already have an account?</div>
                <Link to={"/signIn"} className="underline ">Login</Link>
            </div>
        </div>
    );
};

export default HeaderSignUpComponent;