import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiUserAddFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { sendEmail, signIn, UserData } from "../../redux/userSlice";
import { fetchUserPreference } from "../../redux/userPreferenceSlice";
// import { AppContext } from "../../AppContext";

interface SignInFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const SignInForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    // const { setIsLoggedIn } = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const handleVisible = () => {
        setVisible(!visible);
    };

    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        try {
            const response = await dispatch(signIn(data as unknown as UserData));
            if(response.data.user){
                dispatch(fetchUserPreference(response?.data.user.userID));
                localStorage.setItem('token', response?.data.token);
                toast.success("Successfull signin");
                console.log("Hmm : ", response?.data.user.isVerified);
                if(response?.data.user.isVerified){
                    // setIsLoggedIn(true);
                    navigate("/");
                } else {
                    const email = {
                        to: response.data.user.email,
                        subject: "Email Verification",
                        html: `
                          <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; border-radius: 8px; text-align: center;">
                              <h2 style="color: #333; font-size: 24px;">Welcome to PFIM!</h2>
                              <p style="font-size: 16px; color: #666;">Thank you for creating an account with us. Please verify your email address by clicking the button below.</p>
                              <a href="http://localhost:5173/emailVerified" style="display: inline-block; padding: 12px 20px; font-size: 16px; color: white; background-color: #40C4AA; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Your Email</a>
                              <p style="font-size: 14px; color: #999; margin-top: 20px;">If you didn't create an account, please ignore this email.</p>
                          </div>
                        `,
                    };
                    dispatch(sendEmail(email));
                    navigate("/verifyEmail");
                }
            }
            else if(response.data.msg){
                toast.error(response.data.msg);
            }
        } catch (error) {
            console.log("Error while signing in ", error);
        }
        reset();
    };

    const isFormValid = watch("email") && watch("password");

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-full max-w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiUserAddFill className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[1px]">
                <div className=" text-[20px]">Login to your account</div>
                <div className="text-[#666D80] text-[14px]">Enter your details to login.</div>
            </div>
            <form className="w-full flex flex-col gap-4 text-[14px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <div className="flex items-center gap-2 border-[#DFE1E7] border-2 rounded-lg">
                        <MdOutlineEmail className="text-gray-400 text-[16px] ml-2" />
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: "Invalid email format",
                                },
                            })}
                            type="text"
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your email"
                        />
                    </div>
                    {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
                </div>
                <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <div className="flex items-center gap-1 border-[#DFE1E7] border-2 rounded-lg px-2">
                        <RiLockPasswordLine className="text-gray-400 text-[16px]" />
                        <input
                            {...register("password", { required: "Password is required" })}
                            type={visible ? "text" : "password"}
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your password"
                        />
                        {visible ? (
                            <IoEyeOutline onClick={handleVisible} className="text-gray-400 text-[16px]" />
                        ) : (
                            <IoEyeOffOutline onClick={handleVisible} className="text-gray-400 text-[16px]" />
                        )}
                    </div>
                    {errors.password && <div className="text-red-500 text-sm">{errors.password.message}</div>}
                </div>
                <div className="flex justify-between text-[12px]">
                    <div className="flex items-center gap-2 text-[#666D80]">
                        <input
                            {...register("rememberMe")}
                            type="checkbox"
                            className="appearance-none checked:bg-[#DFE1E7] border-2 rounded-sm border-[#DFE1E7] h-[12px] w-[12px] focus:outline-none"
                        />
                        <label>Remember me</label>
                    </div>
                    <div className="underline ">
                        <Link to="/login">Forgot Password?</Link>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`w-full rounded-lg text-white py-2  border-2 text-[16px] mt-1 ${isFormValid
                            ? "bg-black hover:bg-white hover:text-black border-black"
                            : "bg-[#666D80] border-[#666D80] cursor-not-allowed"
                        }`}
                    disabled={!isFormValid}
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
