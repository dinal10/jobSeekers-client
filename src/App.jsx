import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompanyProfileUser from "./pages/Companies/companyprofile";
import Companydetail from "./pages/Companies/companydetail";
import CompanyCreate from "./pages/Companies/Recruiter/companycreate";
import CompanyEdit from "./pages/Companies/Recruiter/companyedit";
import JobDetail from "./pages/Jobs/JobDetail";
import Footer from "./components/Footer";
import UserProfilePage from "./pages/UserProfile";
import ResumePage from "./pages/Userprofiles/ResumePage";
import EducationPage from "./pages/Userprofiles/Education";
import ExperiencePage from "./pages/Userprofiles/Experience";
import SkillPage from "./pages/Userprofiles/Skill";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import JobApply from "./pages/Jobs/JobApply";
import JobApplyUser from "./pages/Jobs/JobApplyUser";
import AllAppliedJob from "./pages/Jobs/Recruiter/AllAppliedJob";
import AppliedJobByID from "./pages/Jobs/Recruiter/AppliedJobByID";
import PostJob from "./pages/Jobs/Recruiter/PostJob";
import JobApplications from "./pages/Jobs/JobApplyUser";
import JobListing from "./pages/Jobs/JobListing";

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
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/job-apply/:id" element={<JobApply />} />
          <Route path="/job-apply-user" element={<JobApplyUser />} />
          {/* Recruiter */}
          <Route path="/all-applied-job" element={<AllAppliedJob />} />
          <Route path="/applied-job/:id" element={<AppliedJobByID />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
