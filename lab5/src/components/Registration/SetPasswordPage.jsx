
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SetPasswordPage({ visible, saveData, data }) {

    const [isHide, setHide] = useState(true);
    const navigateTo = useNavigate();
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    
    const {
        register,
        formState: {
            errors, isValid
        },
        setValue,
        handleSubmit,
    } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        saveData(data);
        navigateTo('/profile');
    }
    const onChangePassword = (value) => {
        const newPassword = value.target.value;
        setPassword(newPassword);
        const newStrength = getPasswordStrength(newPassword);
        setStrength(newStrength);
    }

    return (
        <div className="mt-[32px]" style={{ display: !visible ? "none" : "block" }}>
            <div className="rounded-[8px] border-[1px] border-solid p-[16px] w-full h-[80px] border-[#e2e4e5]">
                <span className="font-normal text-[18px] leading-[28px]">{data.dial_code} {data.telephone_number}</span>
                <div className="flex items-center">
                    <img src="/src/assets/Confirmed.png" alt="confirmed" className="w-[14px] h-[10px] cursor-pointer" />
                    <span className="font-normal ml-[4px] text-[13px] leading-[18px] text-[#575f6e]">Number confirmed</span>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[32px] w-full rounded-[8px] border-[1px] border-[#e2e4e5] p-[32px]">
                    <div className="relative">
                        <span className="font-normal text-[14px] leading-[20px]">Enter your email</span>
                        <input type="text"
                            {...register("email", {
                                required: "Field must not be empty",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Field does not match to patter email@email.com"
                                },
                            })}
                            className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        <span className={errors?.email ? "absolute font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden absolute font-normal text-[12px] leading-[16px]"}>
                            {errors?.email?.message}
                        </span>
                    </div>
                    <div className="mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">Set a password</span>
                        <div className="relative">
                            <input type={isHide ? "password" : "text"} value={password} maxLength={20}
                                {...register("password", {
                                    required: "Field must not be empty",
                                    onChange: onChangePassword,
                                    validate: (value) => {
                                        return strength != "weak" || "Password must won't be a weak"
                                    }
                                })}
                                className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                            <img src={isHide ? "/src/assets/show.png" : "/src/assets/hide.png"} alt="show password" className="absolute w-[22px] h-[22px] top-[40%] left-[95%] cursor-pointer"
                                onClick={() => setHide(!isHide)}
                            />
                            <span className={errors?.password ? "absolute left-[20px] font-normal text-[12px] leading-[16px] text-[#ff0000]" : "left-[20px] absolute font-normal text-[12px] leading-[16px] text-[#000]"}>
                                {errors?.password?.message || strength != '' ?
                                <p className={strength == "weak" ?
                                 "text-[#ff0000] before:absolute before:-ml-[15px] before:content-['🗙'] before:-ml-[15px]" :
                                 strength == "normal" ?
                                  "text-[#D9DE49] before:absolute before:-ml-[15px] before:content-['-']" :
                                   "text-[#00FF00] before:absolute before:-ml-[15px] before:content-['✓']"}>{"Password is " + strength}</p>
                                   : ''
                                }
                            </span>
                        </div>
                        <span className="hidden"></span>
                    </div>
                </div>
                <button className="mt-[32px] px-[32px] bg-[#007aff] rounded-[4px] h-[48px] w-[169px] font-medium text-[16px] leading-[24px] text-white">Register Now</button>
            </form>
        </div>
    )
}

function getPasswordStrength(password) {
    // Check password length
    if (password.length < 8) {
        return "weak"; // Consider passwords less than 8 characters weak
    }

    // Check if password contains both uppercase and lowercase characters
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    if (!hasUppercase || !hasLowercase) {
        return "weak"; // Consider passwords without both upper and lowercase characters weak
    }

    // Check if password contains numbers
    const hasNumber = /\d/.test(password);
    if (!hasNumber) {
        return "weak"; // Consider passwords without numbers weak
    }

    // Check if password contains special characters
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasSpecialChar) {
        return "normal"; // Consider passwords without special characters normal
    }

    // All conditions passed, consider password strong
    return "strong";
}