import { useState } from "react";
import image from "../assets/login-page.jpg";
import Swal from "sweetalert2";
import { useStore } from "../modules/store";
// import { useNavigate } from "react-router-dom";
import { login } from "../fetching/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  async function handleLogin() {
    try {
      const { id, access_token, role } = await login({ email, password });
      Swal.fire({
        title: "Login Success",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      setUser({ id, email, password, access_token, role });
      location.href = "/"
      
    } catch (error) {
      Swal.fire({
        title: "Login Fail",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#001C30]">
      <div className="relative flex flex-col md:flex-row bg-[#DAFFFB] rounded-2xl w-[90%] h-[800px]">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:w-[50%]">
          <span className="mx-auto py-2 text-6xl font-bold text-[#176B87]">
            Login
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500"
            />
          </div>
          <button
            onClick={() => handleLogin()}
            className="w-full bg-[#176B87] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <div className="text-center text-gray-400">
            Dont have an account?
            <span className="font-bold text-black"> Sign up for free</span>
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
          <div className="absolute top-0 h-[45%]  p-6 bg-[#001C30] bg-opacity-25 rounded text-white md:block w-full">
            <h2 className="text-2xl font-bold mb-4">Visi - Misi bakat Lacak</h2>
            <p className="text-xl"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
