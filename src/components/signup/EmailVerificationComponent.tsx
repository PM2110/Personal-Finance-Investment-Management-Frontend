import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { sendEmail } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const EmailVerificationComponent = () => {

    const user = useSelector((state) => state.user.data);
    const dispatch = useDispatch<AppDispatch>();
    const email = {
        to: user.email,
        subject: "Email Verification",
        text: `${<a href='/emailVerified'>Click here to verify your email</a>}`
    }

    const handleSendAgain: () => void = async () => {
        await dispatch(sendEmail(email));
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <MdEmail className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[8px]">
                <div className="font-bold text-[20px]">
                    To login, check your email
                </div>
                <div className="text-[#666D80] text-[13px] text-center">
                    For security, we've sent you an email to <b>pmpatelmanan21@gmail.com.</b> Simply click the link in the email and you'll be set.
                </div>
                <div className="mt-4 text-[#666D80] text-[13px]">
                    Didn't get an email?
                </div>
                <button onClick={handleSendAgain} className="text-[13px] underline -mt-[6px]">Send it again</button>
            </div>
        </div>
    );
};

export default EmailVerificationComponent;
