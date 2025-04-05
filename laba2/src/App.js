import Home from './home';
import { Pricing } from './pricing';
import AllFeatures from './all-features';
import "./styles/app.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<AllFeatures/>} />
      </Routes>
    </Router>
  );
}

export default App;
