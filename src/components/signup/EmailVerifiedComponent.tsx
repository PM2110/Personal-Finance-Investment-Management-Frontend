import { MdMarkEmailRead } from "react-icons/md";

const EmailVerifiedComponent = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <MdMarkEmailRead className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
                <div className="font-bold text-[20px]">
                    Email Verified
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    Your email address <b>pmpatelmanan21@gmail.com</b> has been verified. In the future, you need to use this email address when logging in to <b>PFIM</b>
                </div>
                <button className="bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">Continue</button>
            </div>
        </div>
    );
};

export default EmailVerifiedComponent;