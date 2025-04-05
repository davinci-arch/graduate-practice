import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./styles/output.css"
import Content from './components/Container';
import PalletePage from './components/PalletePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/material-ui-colors' element={<PalletePage paletteName="Material UI Colors" />} />
        <Route path='/flat-ui-colors-v1' element={<PalletePage paletteName="Flat UI Colors v1" />} />
        <Route path='/flat-ui-colors-dutch' element={<PalletePage paletteName="Flat UI Colors Dutch" />} />
        <Route path='/flat-ui-colors-american' element={<PalletePage paletteName="Flat UI Colors American" />} />
        <Route path='/flat-ui-colors-aussie' element={<PalletePage paletteName="Flat UI Colors Aussie" />} />
        <Route path='/flat-ui-colors-british' element={<PalletePage paletteName="Flat UI Colors British" />} />
        <Route path='/flat-ui-colors-spanish' element={<PalletePage paletteName="Flat UI Colors Spanish" />} />
        <Route path='/flat-ui-colors-indian' element={<PalletePage paletteName="Flat UI Colors Indian" />} />
        <Route path='/flat-ui-colors-french' element={<PalletePage paletteName="Flat UI Colors French" />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
