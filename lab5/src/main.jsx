import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

import MainPage from './components/MainPage'
import "./styles/output.css"

import ConfirmationCodePage from './components/Registration/ConfirmationCodePage'
import SetPasswordPage from './components/Registration/SetPasswordPage'
import PhoneNumberPage from './components/Registration/PhoneNumberPage'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MainPage />
    </Router>
  </React.StrictMode>,
)
