import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiUserAddFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import UserAPIManager from "../../api/apiManager/UserAPIManager";
import toast from "react-hot-toast";

interface SignInFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const SignInForm = () => {
    const navigate = useNavigate();
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
            // const response = await dispatch(signIn(data));
            const response = await UserAPIManager.signIn(data);
            console.log(response);
            if(response.data.user){
                toast.success("SignIn Successfull");
                navigate("/");
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
                <div className="font-bold text-[20px]">Login to your account</div>
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
                    <div className="underline font-bold">
                        <Link to="/login">Forgot Password?</Link>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`w-full rounded-lg text-white py-2 font-bold border-2 text-[16px] mt-1 ${isFormValid
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
