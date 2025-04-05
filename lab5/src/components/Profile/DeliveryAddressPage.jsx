import { Combobox } from "@headlessui/react"
import { useForm, Controller } from "react-hook-form";
import DataCountry from "../../assets/country.json"
import { useState } from "react";
export default function DeliveryAddressPage({ visible, saveData, allData }) {

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

    const onSubmitForm = (data) => {
        saveData(data);
        alert("Check your data in console");
        console.log(JSON.stringify(allData))
    }
    const country = DataCountry.data.map(item => item.country);

    const [selectedCountry, setSelectedCountry] = useState(country[0]);
    const [query, setQuery] = useState('');
    const [queryCity, setQueryCity] = useState('');

    const [cities, setCities] = useState(DataCountry.data.find(item => item.country == country[0]).cities);
    const [selectedCity, setSelectedCity] = useState(cities[0]);

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
    return (
        <div className="w-full mb-[100px]" style={{ display: !visible ? "none" : "block" }}>
            <form action="" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="p-[32px] border-[1px] border-solid border-[#E2E4E5] rounded-[8px] mt-[32px]">
                    <div>
                        <div>
                            <h1 className="font-semibold text-[18px] leading-[24px]">Delivery address</h1>
                            <span className="text-gray font-light text-[12px] leading-[16px] mt-[2px]">Used for shipping orders</span>
                        </div>
                    </div>
                    <div className="mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">Address</span>
                        <input type="text"
                            {...register('address', {
                                required: "Field must not be empty!",
                                pattern: {
                                    value: /^[a-zA-Z0-9\s,'-]*$/,
                                    message: 'Please, write an address'

                                },
                            })}
                            className="border-b-[1px] border-b-[#e2e4e5] w-[392px] pl-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                        <span className={errors?.address ? "absolute font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden"}>
                            {errors?.address?.message}
                        </span>
                    </div>
                    <div className="mt-[32px] z-[1] relative">
                        <span className="font-normal text-[14px] leading-[20px]">City</span>

                        <Controller
                            control={control}
                            name="delivery_city"
                            defaultValue={selectedCity}
                            rules={{
                                required: "Field must not be empty!",
                            }}
                            render={() => (
                                <Combobox value={selectedCity} onChange={setSelectedCity}>
                                    <div className="flex relative">
                                        <Combobox.Input onChange={(event) => setQueryCity(event.target.value)} className="border-b-[1px] border-b-[#e2e4e5] w-[392px] pl-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
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
                    <div className="flex mt-[32px]">
                        <div>
                            <span className="font-normal text-[14px] leading-[20px]" >Country</span>
                            <Controller
                                control={control}
                                name="delivery_country"
                                defaultValue={selectedCountry}
                                rules={{
                                    required: "Field must not be empty!",
                                }}
                                render={() => (
                                    <Combobox value={selectedCountry} onChange={handleChangeCountry}>
                                        <div className="flex relative">
                                            <Combobox.Input onChange={(event) => setQuery(event.target.value)} className="border-b-[1px] border-b-[#e2e4e5] w-[180px] pl-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
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
                        </div>
                        <div className="relative">
                            <div className="ml-[32px]">
                                <span className="font-normal text-[14px] leading-[20px]">Zip code</span>
                                <input type="text"
                                    {...register('zip_code', {
                                        required: "Field must not be empty!",
                                        pattern: {
                                            value: /^\d{4,}$/,
                                            message: 'Must contain an numbers'
        
                                        },
                                    })}
                                    className="border-b-[1px] border-b-[#e2e4e5] w-[180px] pl-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                            </div>
                            <span className={errors?.zip_code ? "absolute left-[34px] font-normal text-[12px] leading-[16px] text-[#ff0000]" : "hidden"}>
                                {errors?.zip_code?.message}
                            </span>
                        </div>

                    </div>
                    <div className="mt-[32px]">
                        <span className="font-normal text-[14px] leading-[20px]">Optional</span>
                        <input type="text" 
                        {...register('optional', {
                            
                        })}
                        className="border-b-[1px] border-b-[#e2e4e5] w-[392px] pl-[16px] py-[8px] outline-none focus:border-b-[#007aff] transition-[border] duration-[300ms] ease-in" />
                    </div>
                </div>
                <div>
                    <button className="select-none flex justify-center items-center mt-[32px] px-[32px] bg-[#007aff] rounded-[4px] h-[48px] w-[128px] font-medium text-[16px] leading-[24px] text-white">
                        <img src="src/assets/Save.png" alt="Save" className="w-[18px] h-[13px]" />
                        <span className="ml-[11px]">Save</span>
                    </button>
                </div>
            </form>
        </div>
    )
}