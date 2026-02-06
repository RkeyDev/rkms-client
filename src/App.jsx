import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  return (
   <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App
