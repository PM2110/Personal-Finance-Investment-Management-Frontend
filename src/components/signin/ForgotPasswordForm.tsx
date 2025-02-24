import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPasswordForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ForgotPasswordFormData>({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data) => {
        // console.log(data);
        reset();
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-auto bg-white w-[400px] border-[#DFE1E7] rounded-2xl px-8 py-6 border-2">
            <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-white p-[10px] rounded-full">
                <div className="bg-white p-[10px] rounded-full">
                    <RiLockPasswordFill className="text-[16px]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
                <div className="font-bold text-[20px]">
                    Forgot Your Password
                </div>
                <div className="text-[#666D80] text-[14px] text-center">
                    Enter your email and we will send you a link to reset your password.
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
                    <button className="bg-black text-white text-[15px] w-full py-[6px] font-bold border-black border-2 hover:bg-white hover:text-black rounded-lg">
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
