
import { useState } from "react"
import SocialNetworkInput from "./SocialNetworkInput";
import { useForm } from "react-hook-form";
export default function ContactsPage({ nextPage, visible, data, saveData }) {
    const socialNetworks = ["Skype", "Facebook", "Twitter"];

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

    const [socialNet, setSocialNet] = useState([<SocialNetworkInput key={0} name={socialNetworks[0]} socialNets={socialNetworks} errors={errors} register={register} />]);

    const [countPress, setCountPress] = useState(0);
    const [telephoneNumber, setTelephoneNumber] = useState(data.dial_code + " " + data.telephone_number);
    const [email, setEmail] = useState(data.email);



    const getNewElement = () => {

        if (countPress < socialNetworks.length - 1) {
            setSocialNet([...socialNet, <SocialNetworkInput key={socialNet.length} name={socialNetworks[0]} socialNets={socialNetworks} errors={errors} register={register} />]);
            setCountPress(countPress + 1);
        }
    }

    const handleSubmitForm = (data) => {
        saveData(data);
        nextPage();
    }

    return (
        <div className="w-full mb-[108px]" style={{ display: !visible ? "none" : "block" }}>
            <form action="" onSubmit={handleSubmit(handleSubmitForm)}>

                <div className="p-[32px] border-[1px] border-solid border-[#E2E4E5] rounded-[8px] mt-[32px]">
                    <div>
                        <h1 className="font-semibold text-[18px] leading-[24px]">Contacts</h1>
                        <span className="text-gray font-light text-[12px] leading-[16px] mt-[2px]">These contacts are used to inform about orders</span>
                    </div>
                    <div>
                        <div className="flex relative mt-[32px]">
                            <img src="src/assets/Email.png" alt="Email" className="absolute w-[20px] h-[16px] top-[30%]" />
                            <input type="text" value={email} disabled={true} className="border-b-[1px] border-b-[#e2e4e5] w-[392px] pl-[36px] pr-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        </div>
                        <div className="flex relative mt-[32px]">
                            <img src="src/assets/Phone.png" alt="Phone" className="absolute w-[18px] h-[18px] top-[30%]" />
                            <input type="text" value={telephoneNumber} disabled={true} className="border-b-[1px] border-b-[#e2e4e5] w-[392px] pl-[36px] pr-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        </div>
                    </div>
                    <div className="mt-[48px]">
                        <div>
                            <h1 className="font-semibold text-[18px] leading-[24px]">Social network</h1>
                            <span className="text-gray font-light text-[12px] leading-[16px] mt-[2px]">Indicate the desired communication method</span>
                        </div>

                        <div className="flex flex-col">
                            {socialNet}
                        </div>
                    </div>
                    <div className="mt-[32px] cursor-pointer select-none" onClick={getNewElement}>
                        <div className="flex items-center">
                            <img src="src/assets/AddMore.png" alt="Add more social network" className="w-[14px] h-[14px]" />
                            <span className="ml-[13px] font-medium text-[16px] leading-[24px] text-[#007aff]">Add More</span>
                        </div>
                    </div>
                </div>
                <div className="mt-[32px] font-medium text-[16px] leading-[24px]">
                    <button className="flex items-center border-[#bbbfc1] border-solid border-[1px] rounded-[4px] pr-[24px] pl-[32px] w-[151px] h-[48px] cursor-pointer">
                        <span>Go Next</span>
                        <span className="ml-[8px]">→</span>
                    </button>
                </div>
            </form>

        </div>
    )
}