import { Routes, Route } from "react-router-dom"
import RegistrationPage from "./Registration/RegistrationPage"
import ProfileInfoPage from "./Profile/ProfileInfoPage"
import { useState } from "react"
export default function NavPage() {

    const [data, setData] = useState({});

    const saveData = (externalData) => {
        setData({...data, ...externalData})
    }

    return (
        <div className="w-[456px] h-auto">
            <Routes>
                <Route path='/' element={<RegistrationPage saveData={saveData} data={data} />} />
                <Route path='/profile' element={<ProfileInfoPage saveData={saveData} data={data} />} />
            </Routes>
        </div>

    )
}