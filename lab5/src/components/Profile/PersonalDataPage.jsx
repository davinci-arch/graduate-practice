import { useState, useEffect } from "react";
import DataCountry from "../../assets/country.json"
import { Combobox } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
export default function PersonalDataPage({ nextPage, visible, saveData }) {

    const country = DataCountry.data.map(item => item.country);

    const [selectedCountry, setSelectedCountry] = useState(country[0]);
    const [query, setQuery] = useState('');
    const [queryCity, setQueryCity] = useState('');

    const [cities, setCities] = useState(DataCountry.data.find(item => item.country == country[0]).cities);
    const [selectedCity, setSelectedCity] = useState(cities[0]);

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

    const filteredCountry =
        query === ''
            ? country
            : country.filter((country) => {
                return country.toLowerCase().includes(query.toLowerCase());
            });

    const filteredCity =
        queryCity === ''
            ? cities
            : cities.filter((city) => {
                return city.toLowerCase().includes(queryCity.toLowerCase());
            });

    const handleChangeCountry = (value) => {
        setSelectedCountry(value);
        const citiesByCountry = DataCountry.data.find(item => item.country == value).cities
        setCities(citiesByCountry);
        setSelectedCity(citiesByCountry[0]);
    }

    const handleSubmitForm = (data) => {
        saveData(data);
        nextPage();
    }

    return (
        <div className="w-full mt-[32px] mb-[74px]" style={{ display: !visible ? "none" : "block" }}>
            <form action="" onSubmit={handleSubmit(handleSubmitForm)}>

                <div className="flex items-center relative">
                    <div className="flex items-center">
                        <div className="flex content-center items- justify-center">
                            <input type="checkbox"
                                {...register('checkbox', {
                                    required: "Agree with terms of use",
                                })}
                                className="w-[18px] h-[18px] cursor-pointer" />
                        </div>
                        <div className="font-normal text-[16px] leading-[24px] ml-[8px]">
                            <span>I agree with</span>
                        </div>
                        <div className="font-medium text-[#007aff] leading-[24px] text-[16px] ml-[8px]">
                            <a href="#">Terms of use</a>
                        </div>
                    </div>
                    <div className="absolute top-[18px]">
                        <span className="relative text-[12px] text-[#ff0000]">
                            {errors?.checkbox?.message}
                        </span>
                    </div>
                </div>
                <div className="p-[32px] border-[1px] border-solid border-[#E2E4E5] rounded-[8px] mt-[32px]">
                    <div>
                        <h1 className="font-semibold text-[20px] leading-[28px]">Personal data</h1>
                        <span className="text-gray font-light text-[12px] leading-[16px] mt-[2px]">Specify exactly as in your passport</span>
                    </div>
                    <div className="relative mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">First name</span>
                        <input type="text"
                            {...register('first_name', {
                                required: "Field must not be empty!",
                                pattern: {
                                    value: /^[A-Z][a-z]*$/,
                                    message: 'First letter must be a capital and don\'t contain numbers'
                                },
                            })}
                            className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        <span className={errors?.first_name ? "absolute font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden"}>
                            {errors?.first_name?.message}
                        </span>
                    </div>
                    <div className="relative mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">Second name</span>
                        <input type="text"
                            {...register('second_name', {
                                required: "Field must not be empty!",
                                pattern: {
                                    value: /^[A-Z][a-z]*$/,
                                    message: 'First letter must be a capital and don\'t contain numbers'

                                },
                            })}
                            className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        <span className={errors?.second_name ? "absolute font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden"}>
                            {errors?.second_name?.message}
                        </span>
                    </div>
                    <div className="mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">Date of birth</span>
                        <div>
                            <input type="date"
                                {...register('date_of_birth', {
                                    required: "Field must not be empty!",
                                    pattern: {
                                        value: /^\d{4}-\d{2}-\d{2}$/,
                                        message: 'Field doesn\'t match the pattern [yyyy-mm-dd]'
                                    },
                                })}
                                className="custom-date-input border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                            <span className={errors?.date_of_birth ? "absolute font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden"}>
                                {errors?.date_of_birth?.message}
                            </span>
                        </div>
                        <span className="hidden absolute font-normal text-[12px] leading-[16px]"></span>
                    </div>
                    <div className="mt-[45px] z-[1] relative">
                        <span className="font-normal text-[14px] leading-[20px]">Country</span>
                        <Controller
                            control={control}
                            name="country"
                            defaultValue={selectedCountry}
                            rules={{
                                required: "Field must not be empty!",
                            }}
                            render={() => (
                                <Combobox value={selectedCountry} onChange={handleChangeCountry}>
                                    <div className="flex relative">
                                        <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                                        <Combobox.Button className="absolute left-[90%] top-[45%]">
                                            <div className="bg-[url('src/assets/Unfold.png')] w-[10px] h-[5px]"></div>
                                        </Combobox.Button>
                                    </div>
                                    <Combobox.Options className="absolute mt-1 bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm cursor-pointer transition-[all] ">
                                        {filteredCountry.map((country) => (
                                            <Combobox.Option key={country} value={country}>
                                                {({ active, selected }) => (
                                                    <p className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                        }`}>
                                                        {country}
                                                    </p>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                </Combobox>
                            )}
                        />
                        <span className="hidden absolute font-normal text-[12px] leading-[16px]"></span>

                    </div>
                    <div className="mt-[45px]">
                        <span className="font-normal text-[14px] leading-[20px]">City</span>
                        <Controller
                            control={control}
                            name="city"
                            defaultValue={selectedCity}
                            rules={{
                                required: "Field must not be empty!",
                            }}
                            render={() => (
                                <Combobox value={selectedCity} onChange={setSelectedCity}>
                                    <div className="flex relative">
                                        <Combobox.Input onChange={(event) => setQueryCity(event.target.value)} className="border-b-[1px] border-b-[#e2e4e5] w-[392px] px-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                                        <Combobox.Button className="absolute left-[90%] top-[45%]">
                                            <div className="bg-[url('src/assets/Unfold.png')] w-[10px] h-[5px]"></div>
                                        </Combobox.Button>
                                    </div>
                                    <Combobox.Options className="absolute mt-1 bg-white shadow-lg max-h-40 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm cursor-pointer transition-[all] ">
                                        {filteredCity.map((city) => (
                                            <Combobox.Option key={city} value={city}>
                                                {({ active, selected }) => (
                                                    <p className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                        }`}>
                                                        {city}
                                                    </p>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                </Combobox>
                            )}
                        />
                        <span className="hidden absolute font-normal text-[12px] leading-[16px]"></span>

                    </div>
                    <div></div>
                </div>
                <div className="p-[16px] border-[1px] border-solid border-[#E2E4E5] rounded-[8px] mt-[32px]">
                    <input type="text"
                        {...register('itin', {
                            required: "Field must not be empty!",
                            pattern: {
                                value: /^\d{9}$/,
                                message: 'Write your itin'
                            },
                        })}
                        className="custom-date-input w-[392px] px-[16px] py-[8px] outline-none" />
                    <div className="flex items-center mt-[2px]">
                        {errors?.itin ?
                            <span className="absolute font-normal text-[12px] leading-[16px] text-[#ff0000]">
                                {errors?.itin?.message}
                            </span> : <div className="flex items-center mt-[2px]">
                                <img src="src/assets/Confirmed.png" alt="confirmed" className="w-[14px] h-[10px]" />
                                <span className="ml-[6px] text-[13px] leading-[18px] font-normal text-[#575f6e]">Your ITIN</span>
                            </div>
                        }

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