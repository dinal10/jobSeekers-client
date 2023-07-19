import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CompanyProfileUser from './pages/Companies/companyprofile';
import Companydetail from './pages/Companies/companydetail';
import CompanyCreate from './pages/Companies/Recruiter/companycreate';
import CompanyEdit from './pages/Companies/Recruiter/companyedit';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme"
function App() {
  return (
    
    <Router>
      <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/companyprofile" element={<CompanyProfileUser />} />
        <Route path="/companydetail/:id" element={<Companydetail />} />
        <Route path="/companycreate" element={<CompanyCreate />} />
        <Route path="/companyedit/:id" element={<CompanyEdit />} />
      </Routes>
      </ChakraProvider>
    </Router>
    
  );
}

export default App;