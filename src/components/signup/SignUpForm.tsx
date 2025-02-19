import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine, RiUser6Line, RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { setUser, signUp, UserData } from "../../redux/userSlice";
import UserAPIManager from "../../api/apiManager/UserAPIManager";
import toast from "react-hot-toast";

interface SignUpFormData {
    userName: string;
    email: string;
    password: string;
}

const SignUpForm = () => {
    // const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [satisfied, setSatisfied] = useState(0);

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<SignUpFormData>();

    const handleVisible = () => {
        setVisible(!visible);
    };

    const onSubmit: SubmitHandler<SignUpFormData> = async (data: SignUpFormData) => {
        // await dispatch(signUp(data));
        try {
            const response = await UserAPIManager.signUp(data);
            if (response.data){
                toast.success("Successfull signup");
            }
        } catch {
            toast.error("Error while signing up");
        }
        reset();
        setSatisfied(0);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let countSatisfies = 0;
        if(e.target.value.length > 0){
            countSatisfies++;
        }
        if(/[A-Z]/.test(e.target.value)){
            countSatisfies++;
        }
        if(/\d/.test(e.target.value)){
            countSatisfies++;
        }
        if(e.target.value.length >= 8){
            countSatisfies++;
        }
        setSatisfied(countSatisfies);
    };

    const getColor = () => {
        switch (satisfied){
            case 1:
                return "bg-red-500"
            case 2:
                return "bg-orange-500"
            case 3:
                return "bg-yellow-500"
            case 4:
                return "bg-[#40C4AA]"
        }
    }

    const isFormValid = watch("userName") && watch("email") && watch("password");

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-full sm:w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiUserAddFill className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[1px]">
                <div className="font-bold text-[20px] sm:text-[20px]">
                    Create a new account
                </div>
                <div className="text-[#666D80] text-[14px] sm:text-[14px]">
                    Enter your details to register.
                </div>
            </div>
            <form className="w-full flex flex-col gap-4 text-[14px] sm:text-[14px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-1">
                    <label>Fullname</label>
                    <div className="flex items-center gap-2 border-[#DFE1E7] border-2 rounded-lg">
                        <RiUser6Line className="text-gray-400 text-[16px] ml-2" />
                        <input
                            type="text"
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your name"
                            {...register("userName", { required: "Full name is required" })}
                        />
                    </div>
                    {errors.userName && <span className="text-red-500 text-[12px]">{errors.userName.message}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <div className="flex items-center gap-2 border-[#DFE1E7] border-2 rounded-lg">
                        <MdOutlineEmail className="text-gray-400 text-[16px] ml-2" />
                        <input
                            type="text"
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                    </div>
                    {errors.email && <span className="text-red-500 text-[12px]">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label>Password</label>
                    <div className="flex items-center gap-1 border-[#DFE1E7] border-2 rounded-lg px-2">
                        <RiLockPasswordLine className="text-gray-400 text-[16px]" />
                        <input
                            type={visible ? "text" : "password"}
                            className="w-full h-8 p-2 rounded-md focus:outline-none text-[#666D80]"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d)/,
                                    message: "Password must contain at least 1 uppercase letter and 1 number"
                                },
                                onChange: handleOnChange
                            })}
                        />
                        {visible ? <IoEyeOutline onClick={handleVisible} className="text-gray-400 text-[16px]" /> :
                            <IoEyeOffOutline onClick={handleVisible} className="text-gray-400 text-[16px]" />}
                    </div>
                    {errors.password && <span className="text-red-500 text-[12px]">{errors.password.message}</span>}
                    <div className="text-[12px] text-[#666D80]">Must contain 1 uppercase letter, 1 number, min. 8 characters.</div>
                    <div className="grid grid-cols-4 mt-2 gap-2">
                        <div className={`${satisfied >= 1 ? getColor() : "bg-gray-200" } h-[6px] rounded-full`}></div>
                        <div className={`${satisfied >= 2 ? getColor() : "bg-gray-200" } h-[6px] rounded-full`}></div>
                        <div className={`${satisfied >= 3 ? getColor() : "bg-gray-200" } h-[6px] rounded-full`}></div>
                        <div className={`${satisfied >= 4 ? getColor() : "bg-gray-200" } h-[6px] rounded-full`}></div>
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
                    Sign Up
                </button>
            </form>

            <div className="text-[12px] text-[#666D80] flex flex-col items-center -mt-2">
                <div>By clicking Sign Up, you agree to accept PFIM's</div>
                <Link to="/" className="text-black underline text-[12px]">Terms & Condition</Link>
            </div>
        </div>
    );
}

export default SignUpForm;
