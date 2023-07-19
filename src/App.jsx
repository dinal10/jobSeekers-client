import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CompanyProfileUser from './pages/Companies/companyprofile';
import Companydetail from './pages/Companies/companydetail';
import CompanyCreate from './pages/Companies/Recruiter/companycreate';
import CompanyEdit from './pages/Companies/Recruiter/companyedit';
import JobListing from "./pages/JobListing";
import JobDetail from "./pages/JobDetail";
import Footer from "./components/Footer";
import UserProfilePage from './pages/UserProfile';
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
        <Route path="/job" element={<JobListing />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/profile" element={<UserProfilePage/>}/>
      </Routes>
      <Footer />
      </ChakraProvider>
    </Router>
    
  );
}

export default App;
