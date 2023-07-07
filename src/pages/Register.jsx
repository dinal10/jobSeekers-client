import { useState } from "react";
import image from "../../public/login-page.jpg";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
    // Logika untuk melakukan registrasi pengguna
    const payload = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      role,
    };
    console.log(payload);
    // Lakukan pemanggilan fungsi register atau kirim data ke endpoint API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001C30]">
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl w-[90%] h-[800px]">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:w-[50%]">
          <span className="mx-auto py-2 text-6xl font-bold">Register</span>
          <div className="py-4">
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
          <div className="py-4">
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
          <div className="py-4">
            <span className="mb-2 text-md">First Name</span>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Last Name</span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Phone Number</span>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Role</span>
            <input
              type="text"
              name="role"
              id="role"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            onClick={handleRegister}
          >
            Register
          </button>
          <div className="text-center text-gray-400">
            Already have an account?{" "}
            <span className="font-bold text-black">Sign in</span>
          </div>
        </div>
        {/* right side */}
        <div className="relative md:w-[50%] hidden md:block">
          <img
            src={image}
            alt="img"
            className="w-full h-full rounded-r-2xl object-cover"
          />
          {/* text on image */}
          <div className="absolute top-0 h-[45%] p-6 bg-[#001C30] bg-opacity-25 rounded text-white md:block w-full">
            <h2 className="text-2xl font-bold mb-4">Visi - Misi bakat Lacak</h2>
            <p className="text-xl">
              Start every new project and cant imagine working without it. Start
              every new project and cant imagine working without it. Start every
              new project and cant imagine working without it.Start every new
              project and cant imagine working without it.Start every new
              project and cant imagine working without it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
