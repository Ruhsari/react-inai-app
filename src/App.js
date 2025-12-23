import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/auth/AdminDashboard';
import Clubs from './pages/Clubs';
import OrgChart from './pages/OrgChart';
import Documents from './pages/Documents';
import Cooperation from './pages/Cooperation';
import Conference from './pages/Conference';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/about/orgchart" element={<OrgChart />} />
        <Route path="/about/documents" element={<Documents />} />
        <Route path="/about/cooperation" element={<Cooperation />} />
        <Route path="/about/conference" element={<Conference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;