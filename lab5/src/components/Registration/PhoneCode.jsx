import TelephoneData from "../../assets/data.json"
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { Controller } from "react-hook-form";
export default function PhoneCode({ control, setValue }) {
    const allDialCodes = TelephoneData.map(country => country.dial_code);

    const dialCodes = [...new Set(allDialCodes)];
    const [selectedCode, setSelectedCode] = useState(dialCodes[0]);
    const [query, setQuery] = useState('');

    const filteredCodes =
        query === ''
            ? dialCodes
            : dialCodes.filter((code) => {
                return code.toLowerCase().includes(query.toLowerCase());
            });
    return (
        <div className="w-[80px] relative">
            <Controller
                control={control}
                name="dial_code"
                defaultValue={selectedCode}
                rules={{
                    maxLength: 5,
                    required: "Field must not be empty!",
                    pattern: /^\+\d{1,4}$/,
                }}
                render={() => (
                    <Combobox value={selectedCode} onChange={(value) => {
                        setSelectedCode(value);
                        setValue('dial_code', value);
                    }}>
                        <div className="flex relative">
                            <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="pl-[16px] py-[8px] border-b-[1px] w-[80px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                            <Combobox.Button className="absolute left-[80%] top-[20%]">
                                <div className="before:content-['▾'] w-[10px] h-[5px]"></div>
                            </Combobox.Button>

                        </div>

                        <Combobox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm cursor-pointer transition-[all] ">
                            {filteredCodes.map((code) => (
                                <Combobox.Option key={code} value={code}>
                                    {({ active, selected }) => (
                                        <p className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                            }`}>
                                            {code}

                                        </p>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Combobox>
                )}
            />
        </div>


    );
}