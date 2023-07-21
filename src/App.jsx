import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompanyProfileUser from "./pages/Companies/companyprofile";
import Companydetail from "./pages/Companies/companydetail";
import CompanyCreate from "./pages/Companies/Recruiter/companycreate";
import CompanyEdit from "./pages/Companies/Recruiter/companyedit";
import JobListing from "./pages/Jobs/JobListing";
import JobDetail from "./pages/Jobs/JobDetail";
import Footer from "./components/Footer";
import UserProfilePage from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import JobApply from "./pages/Jobs/JobApply";
import JobApplyUser from "./pages/Jobs/JobApplyUser";
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
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/job-apply/:id" element={<JobApply />} />
          <Route path="/job-apply-user" element={<JobApplyUser />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
