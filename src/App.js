import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './components/AuthContext';
import NavBar from './components/Navbar';
function App() {
  return (
    <AuthProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
