
import PhoneNumberPage from "./PhoneNumberPage"
import ConfirmationCodePage from "./ConfirmationCodePage"
import SetPasswordPage from "./SetPasswordPage"
import StepperNav from "../Navigation/StepperNav";
import { useState, useEffect } from "react";


export default function RegistrationPage({ saveData, data }) {



    const [completedStep, setCompletedStep] = useState(0);
    const [phoneNumber, setPhoneNumberPage] = useState(true);
    const [passwordPage, setPasswordPage] = useState(false);
    const [confirmedNumber, setConfirmedNumberPage] = useState(false);


    const nextPage = () => {
        setCompletedStep(completedStep + 1);
    }

    const prevPage = () => {
        setCompletedStep(completedStep - 1);
    }

    useEffect(() => {
        setPhoneNumberPage(completedStep == 0 ? true : false);
        setConfirmedNumberPage(completedStep == 1 ? true : false)
        setPasswordPage(completedStep == 2 ? true : false);
    }, [completedStep]);


    return (
        <div className="flex justify-start items-center flex-col">
            <StepperNav completedStep={completedStep} />
            <div className="w-full mt-[80px]">
                <h1 className="font-bold text-[32px] leading-[36px]">Registration</h1>
                <div className="font-light text-[16px] leading-[22px] mt-[16px] text-[#575F6E]">
                    <p>Fill in the registration data. It will take a couple of minutes.</p>
                    <p>All you need is a phone number and e-mail</p>
                </div>
            </div>

            <div className="w-full">
                <PhoneNumberPage nextPage={nextPage} visible={phoneNumber} saveData={saveData} />
                <ConfirmationCodePage nextPage={nextPage} visible={confirmedNumber} prevPage={prevPage} saveData={saveData} data={data} />
                <SetPasswordPage visible={passwordPage} saveData={saveData} data={data} />
            </div>
        </div>
    )
}