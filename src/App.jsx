import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Verification from './components/Verification/Verification';
import Dashbord from './components/Dashboard/Dashboard';
import Endpoints from './components/Endpoints/Endpoints';
import Connection from './components/Connection/Connection';
function App() {

  return (
   <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/endpoints" element={<Endpoints />} />
        <Route path="/connection" element={<Connection />} />

        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App
