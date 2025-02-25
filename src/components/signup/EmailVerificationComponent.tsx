import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { sendEmail } from "../../redux/userSlice";
import { useSelector } from "react-redux";

const EmailVerificationComponent = () => {

    const user = useSelector((state) => state.user.data);
    const dispatch = useDispatch<AppDispatch>();
    const email = {
        to: response.data.user.email,
        subject: "Email Verification",
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
              <h2 style="color: #333; font-size: 24px;">Welcome to PFIM!</h2>
              <p style="font-size: 16px; color: #666;">Thank you for creating an account with us. Please verify your email address by clicking the button below.</p>
              <a href="http://192.168.24.22:5173/emailVerified" style="display: inline-block; padding: 12px 20px; font-size: 16px; color: white; background-color: #40C4AA; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Your Email</a>
              <p style="font-size: 14px; color: #999; margin-top: 20px;">If you didn't create an account, please ignore this email.</p>
          </div>
        `,
    };

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
