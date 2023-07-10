import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userLoggedIn = Boolean(token);
    setLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    window.location.href = "/";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleProfile = () => {
    window.location.href = "/profile"
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div>
                <a href="/">
                  <img className="h-5 w-30" src={logo} alt="LOGO" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex-items-end space-x-4">
                  <a
                    href="/about"
                    className="text-navy px-4 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-navy text-mint font-bold py-2 px-4 rounded-full"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-navy text-mint font-bold py-2 px-4 rounded-full"
                >
                  Login
                </button>
              )}
                {isLoggedIn && (
                  <button
                  onClick={handleProfile}
                  className="bg-navy text-mint font-bold py-2 px-4 rounded-full"
                >
                  Profile
                </button>
                )}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="hidden md:block">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search"
                  className=" border border-navy rounded-md px-3 py-1.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              
              <div className="mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="teal"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="teal"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="bg-navy px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search"
                  className=" border-white rounded-md px-3 py-1.5 text-sm text-gray-900"
                />
              </div>
                <a
                  href="/about"
                  className="text-mint block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                {isLoggedIn && (
                  <div
                    onClick={handleProfile}
                    className="text-mint block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Profile
                  </div>
                )}
                {isLoggedIn ? (
                <div
                  onClick={handleLogout}
                  className="text-mint block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </div>
              ) : (
                <div
                  onClick={handleLogin}
                  className="text-mint block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </div>
              )}
              </div>
              
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
