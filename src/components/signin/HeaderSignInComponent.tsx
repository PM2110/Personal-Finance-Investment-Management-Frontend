import { Link } from "react-router-dom";

const HeaderSignInComponent = () => {
    return (
        <div className="flex w-full justify-between items-center h-auto bg-transparent">
            <img src="/Logo.png" alt="Logo" className="w-[40px] h-auto" />
            <div className="flex gap-[8px] items-center text-[16px]">
                <div className="text-[#666D80]">Don't have an account?</div>
                <Link to={"/"} className="underline font-bold">Register</Link>
            </div>
        </div>
    );
};

export default HeaderSignInComponent;