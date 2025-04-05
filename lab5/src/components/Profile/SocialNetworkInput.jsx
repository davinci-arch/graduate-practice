import { Combobox } from "@headlessui/react"
import { useState } from "react";
import { Controller } from "react-hook-form";
export default function SocialNetworkInput({ name, socialNets, errors, register }) {

    const [socialNet, setSocialNet] = useState(name);
    const path = "src/assets/" + socialNet + ".png";
    const [profile, setProfile] = useState();
    return (
        <div className="flex mt-[32px]">

            <Combobox value={socialNet} onChange={(value) => {
                setSocialNet(value);
            }}>
                <div>
                    <div className="flex relative">
                        <img src={path} alt="Skype" className="absolute w-[24px] h-[24px] top-[20%]" />
                        <Combobox.Input onChange={setSocialNet} className="border-b-[1px] border-b-[#e2e4e5] w-[188px] pl-[38px] pr-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        <Combobox.Button className="absolute left-[90%] top-[45%]">
                            <div className="bg-[url('src/assets/Unfold.png')] w-[10px] h-[5px]"></div>
                        </Combobox.Button>
                    </div>
                    <Combobox.Options className="z-[1] absolute w-[188px] mt-1 bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm cursor-pointer transition-[all] ">
                        {socialNets.map((social) => (
                            <Combobox.Option key={social} value={social}>
                                {({ active, selected }) => (
                                    <p className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                        }`}>
                                        {social}
                                    </p>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </div>
            </Combobox>
            <div className="ml-[16px]">
                <input type="text" placeholder="@profile" value={profile} onChange={setProfile}
                    {...register(socialNet, {
                        required: "Field must not be empty!",
                        pattern: {
                            value: /^@[\w]+$/,
                            message: 'Field doesn\'t match the pattern [@profile]'

                        },
                    })}
                    className="border-b-[1px] border-b-[#e2e4e5] w-[188px] pl-[36px] pr-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                <span className="absolute font-normal text-[12px] leading-[16px] text-[#ff0000]">{errors?.socialNet?.message}</span>
            </div>
        </div>


    )
}