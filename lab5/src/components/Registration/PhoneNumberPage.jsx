import PhoneCode from "./PhoneCode"
import { useForm } from "react-hook-form";
export default function PhoneNumberPage({ nextPage, visible, saveData }) {


    const {
        control,
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
        nextPage();
    }


    const handlePhoneInput = (event) => {
        const input = event.target;
        let inputValue = input.value;

        inputValue = inputValue.replace(/\D/g, '');

        if (inputValue.length > 3) {
            inputValue = inputValue.replace(/(\d{3})/, '$1 ');
        }

        if (inputValue.length > 7) {
            inputValue = inputValue.replace(/(\d{3}) (\d{3})/, '$1 $2-');
        }

        input.value = inputValue;

    };

    return (
        <div style={{ display: !visible ? "none" : "block" }}>
            <div className="w-full bg-[#F0F2F4] flex justify-between h-[68px] p-[16px] rounded-[8px] mt-[32px] select-none">
                <div className="mr-[16px] mt-[4px]">
                    <img src="/src/assets/LockPrivacy.png" alt="lock" className="w-[16px] h-[21px] bg-cover" />
                </div>
                <div>
                    <p className="text-[13px] font-normal leading-[18px] w-[344px]">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                </div>
                <div className="ml-[16px] mt-[4px]">
                    <img src="/src/assets/ClosePrivacy.png" alt="close" className="w-[14px] h-[14px] bg-cover" />
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <div className="p-[32px] border-[1px] border-solid border-[#E2E4E5] rounded-[8px] mt-[32px]">
                    <div className="font-normal text-[14px] text-[#242426] leading-[20px]">Enter your phone number</div>
                    <div className="mt-[32px]">
                        <div className="flex items-end">
                            <PhoneCode control={control} setValue={setValue} />
                            <div className="ml-[16px]">
                                <input type="tel" maxLength={12}
                                    className={errors?.telephone_number ? "px-[16px] text-[#ff0000] py-[8px] border-b-[1px] border-[#ff0000] w-[296px] outline-none transition-[border] duration-[300ms] ease-in" : "px-[16px] py-[8px] border-b-[1px] w-[296px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in"}
                                    {...register('telephone_number', {
                                        required: "Field must not be empty!",
                                        pattern: /^[0-9]{3} [0-9]{3}-[0-9]{4}$/,
                                    })}
                                    onInput={handlePhoneInput} />
                            </div>
                        </div>

                        <div className="relative">
                            {errors?.telephone_number && <p className="text-[12px] text-[#ff0000] absolute">{errors?.telephone_number?.message || "Number does not match a format"}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <button className="flex items-center rounded-[4px] border-[1px] border-solid px-[24px] w-[137px] h-[48px] border-[#bbbfc1] mt-[32px] font-medium text-[16px] leading-[24px] text-center select-none cursor-pointer">Send code</button>
                </div>
            </form>

        </div>

    )
}