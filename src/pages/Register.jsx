import { useState } from "react";
import image from "../assets/login-page.jpg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { register } from "../fetching/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    try {
      register({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        birth_date: birthDate ? birthDate.toISOString().slice(0, 10) : null,
        gender,
        role,
      });
      Swal.fire({
        title: "Register Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        title: "Register Fail",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col md:flex-row bg-white w-[70%] h-[800px]">
        {/* Left side - Card Container */}
        <div className="flex flex-col w-[50%] h-[50%] p-8">
          <span className="mx-auto py-2 text-6xl text-black font-bold">
            Register
          </span>
          <div className="py-2">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="py-2">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="py-2">
            <span className="mb-2 text-md">First Name</span>
            <input
              name="first name"
              id="first name"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="py-2">
            <span className="mb-2 text-md">Last Name</span>
            <input
              name="last name"
              id="last name"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="py-2">
            <span className="mb-2 text-md">Phone number</span>
            <input
              type="text"
              name="phone"
              id="phone"
              pattern="[0-9]{10}"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex">
            <div className="py-2">
              <span className="mb-2 text-md">Birth Date</span>
              <br />
              <DatePicker
                selected={birthDate}
                type="date"
                value={birthDate}
                onChange={(date) => setBirthDate(date)}
                dateFormat="yyyy-MM-dd"
                className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              />
            </div>

            <div className="py-2 px-4">
              <span className="mb-2 text-md">Gender</span>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              >
                <option disabled value="" selected>
                Your gender
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>

          <div className="py-2">
            <span className="mb-2 text-md">Role</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
            >
              <option disabled value="" selected>
              Choose your role
              </option>
              <option value="user">I am an applicant</option>
              <option value="recruiter">I am a recruiter</option>
              <option value="admin">I am an admin</option>
            </select>
          </div>

          <button
            className="w-full bg-[#176B87] text-white p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border hover:border-gray-300"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="text-center text-gray-400">
            Already have an account?{" "}
            <span className="font-bold text-black">Sign in</span>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="relative md:w-[50%] hidden md:block">
          <img
            src={image}
            alt="img"
            className="w-full h-[100%] object-cover"
          />
          {/* text on image */}
          <div className="absolute top-0 h-[100%] p-6 bg-[#001C30] bg-opacity-25 text-white md:block w-full">

            <h1 className="text-6xl text-bold">
              We connect you to your desired company.
              </h1>
          </div>
        </div>
      </div>
    </div>
  );
}





