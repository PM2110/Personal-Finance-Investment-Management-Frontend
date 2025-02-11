import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignInForm = () => {

    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[425px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiUserAddFill className="text-[16px]"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[1px]">
                <div className="font-bold text-[24px]">
                    Login to your account
                </div>
                <div className="text-[#666D80] text-[16px]">
                    Enter your details to login.
                </div>
            </div>
            <form className="w-full flex flex-col gap-4 text-[16px]">
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <div className="flex items-center gap-2 border-[#DFE1E7] border-2 rounded-lg">
                        <MdOutlineEmail className="text-gray-400 text-[20px] ml-2" />
                        <input 
                            type="text"
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <div className="flex items-center gap-1 border-[#DFE1E7] border-2 rounded-lg px-2">
                        <RiLockPasswordLine className="text-gray-400 text-[20px]" />
                        <input 
                            type="password"
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your password"
                        />
                        {visible ? <IoEyeOutline onClick={handleVisible} className="text-gray-400 text-[20px]" /> : <IoEyeOffOutline onClick={handleVisible} className="text-gray-400 text-[20px]" />}
                    </div>
                </div>
                <div className="flex justify-between text-[14px]">
                    <div className="flex items-center gap-2 text-[#666D80]">
                        <input type="checkbox" className="appearance-none checked:bg-[#DFE1E7] border-2 rounded-sm border-[#DFE1E7] h-[16px] w-[16px] focus:outline-none"/>
                        <label>Remember me</label>
                    </div>
                    <div className="underline font-bol">
                        <Link to="/login">Forgot Password?</Link>
                    </div>
                </div>
                <button className="w-full bg-[#666D80] rounded-lg text-white py-2 font-bold border-[#666D80] border-2 hover:bg-white hover:text-[#666D80] text-[16px] mt-1">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignInForm;