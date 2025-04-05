
import { useState, useEffect } from "react"
import TelephoneData from "../assets/data.json"
import Header from "./Header"
import NavPage from "./NavPage"

export default function MainPage() {


    return (
        <div className="flex flex-row mt-[44px] justify-around">
            <Header />
            <NavPage />
            <div>
                <img src="/src/assets/VectorCloseMain.png" alt="Muted" className="w-[28px] h-[28px]" />
            </div>

        </div>
    )
}