
import StepperNav from "../Navigation/StepperNav"
import { useState, useEffect } from "react";
import PersonalDataPage from "./PersonalDataPage";
import { useForm } from "react-hook-form";
import ContactsPage from "./ContactsPage";
import DeliveryAddressPage from "./DeliveryAddressPage";

export default function ProfileInfoPage({ saveData, data }) {

    const [completedStep, setCompletedStep] = useState(0);
    const [contactsPage, setContactsPage] = useState(true);
    const [personalDataPage, setPersonalDataPage] = useState(false);
    const [socialNetworkPage, setSocialNetworkPage] = useState(false);



    useEffect(() => {
        setPersonalDataPage(completedStep == 0 ? true : false);
        setContactsPage(completedStep == 1 ? true : false)
        setSocialNetworkPage(completedStep == 2 ? true : false);
    }, [completedStep]);

    const nextPage = () => {
        setCompletedStep(completedStep + 1);
    }


    return (
        <div className="flex justify-start items-center flex-col">
            <StepperNav completedStep={completedStep} />
            <div className="w-full mt-[80px]">
                <h1 className="font-bold text-[32px] leading-[36px]">Profile info</h1>
                <div className="text-[#575F6E] font-light text-[16px] leading-[22px] mt-[16px]">
                    <p>Fill in the registration data. It will take a couple of minutes.</p>
                    <p>You only need a passport</p>
                </div>
            </div>
            <PersonalDataPage visible={personalDataPage} nextPage={nextPage} saveData={saveData} />
            <ContactsPage visible={contactsPage} nextPage={nextPage} saveData={saveData} data={data} />
            <DeliveryAddressPage visible={socialNetworkPage} nextPage={nextPage} saveData={saveData} allData={data} />
        </div>
    )
}