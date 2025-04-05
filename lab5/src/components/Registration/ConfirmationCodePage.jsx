import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
export default function ConfirmationCodePage({ visible, nextPage, prevPage, saveData, data }) {

    const [inputValue, setInputValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [confirmationCode, setConfirmationCode] = useState(1111);

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
        nextPage();
    }

    const sendNewConfirmationCode = () => {
        const position = document.getElementsByClassName('symbol');

        setInputValue('');
        setCounter(0);
        for (let index = 0; index < 4; index++) {
            position[index].classList.remove("opacity-0");
        }

        const newCode = Math.floor(Math.random() * 9000) + 1000;
        setConfirmationCode(newCode);
        alert("Your new confimration code: " + newCode);
    }

    const handleChange = (value) => {
        const previousValue = inputValue;
        const currentValue = value.target.value;

        let val = value.target.value;
        setInputValue(val.replace(/\D/g, ''));
        const position = document.getElementsByClassName('symbol');

        if (previousValue.length > currentValue.length) {
            if (counter > 0) {
                setCounter(counter - 1);
            }
            position[counter].classList.remove("opacity-0");

        } else {
            if (counter < 3) {
                setCounter(counter + 1);
            }
            position[counter].classList.add("opacity-0");
        }
    }



    return (
        <div className="mt-[32px]" style={{ display: !visible ? "none" : "block" }}>
            <div className="rounded-[8px] border-[1px] border-solid p-[16px] w-full h-[80px] border-[#e2e4e5]">
                <span className="font-normal text-[18px] leading-[28px]">{data.dial_code} {data.telephone_number}</span>
                <div className="flex justify-between">
                    <span className="font-normal text-[13px] leading-[18px] text-[#575f6e]">Number not confirmed yet</span>
                    <img src="/src/assets/ChangeNumber.png" alt="change number" onClick={prevPage} className="w-[18px] h-[18px] cursor-pointer" />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[32px] select-none">
                    <div className="flex flex-col">
                        <span className="font-normal text-[13px] leading-[18px] text-[#242426]">Confirmation code</span>
                        <div className="flex mt-[8px] justify-between items-end">
                            <div className="relative">
                                <input type="text"
                                    value={inputValue} maxLength={4}
                                    {...register('confirmation_code', {
                                        required: "Field must not be empty!",
                                        validate: (fieldValue) => {
                                            return fieldValue == confirmationCode || "Wrong confirmation code"
                                        },
                                        onChange: handleChange,
                                    })}
                                    className={errors?.confirmation_code ? "pl-[10px] text-[26px] tracking-[10px] border-solid border-b-[1px] border-[#ff0000] w-[296px] h-[44px] outline-none focus:border-b-[#ff0000] transition-[border] duration-[300ms] ease-in"
                                        : "pl-[10px] text-[26px] tracking-[10px] border-solid border-b-[1px] border-[#e2e4e5] w-[296px] h-[44px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in"
                                    }
                                />
                                <div className="absolute top-[50%] left-[4%] flex">
                                    <div className="w-[16px] border-t-[2px] border-t-[#cbcbcb] symbol"></div>
                                    <div className="w-[16px] border-t-[2px] border-t-[#cbcbcb] ml-[8px] symbol"></div>
                                    <div className="w-[16px] border-t-[2px] border-t-[#cbcbcb] ml-[8px] symbol"></div>
                                    <div className="w-[16px] border-t-[2px] border-t-[#cbcbcb] ml-[8px] symbol"></div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center px-[16px] cursor-pointer" onClick={sendNewConfirmationCode}>
                                <img src="/src/assets/Re-send_code.png" alt="Resend code" className="w-[16px] h-[16px]" />
                                <span className="ml-[8px] text-[#007aff] font-medium text-[16px] leading-[24px]">Send again</span>
                            </div>
                        </div>
                        <span className={errors?.confirmation_code?.message ? "font-normal text-[12px] leading-[16px] text-[#ff0000]" : "font-normal text-[12px] leading-[16px] text-[#575f6e]"}>{errors?.confirmation_code?.message || "Confirm phone number with code from sms message"}</span>
                    </div>
                </div>
                <div className="mt-[32px]">
                    <button className="flex w-[106px] items-center h-[48px] px-[24px] rounded-[4px] font-medium leading-[24px] text-center text-[16px] text-[#242731] border-[1px] border-solid border-[#bbbfc1] cursor-pointer">Confirm</button>
                </div>
            </form>

        </div>

    )
}