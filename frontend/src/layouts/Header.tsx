import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-[60px] bg-white text-black flex items-center justify-between px-5 shadow-md z-[1000]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="../../src/images/images-home/logo_2.png"
            className="h-[6vmin] w-[26vmin] px-[0.9vmin]"
            alt="logo"
          />
        </a>

        {/* Desktop Nav */}
        {!token && (
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            <a
              className="text-black text-[16px] font-bold hover:underline"
              href="/"
            >
              Home
            </a>
            <a
              className="text-black text-[16px] font-bold hover:underline"
              href="#"
            >
              Services
            </a>
            <a
              className="text-black text-[16px] font-bold hover:underline"
              href="#"
            >
              Products
            </a>
            <a
              className="text-black text-[16px] font-bold hover:underline"
              href="#"
            >
              Contact
            </a>
          </nav>
        )}

        {token && (
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            <a
              className="text-black text-[16px] font-bold hover:underline"
              href="/dashboard"
            >
              Dashboard
            </a>
          </nav>
        )}

        {/* Desktop Buttons */}
        {!token && (
          <div className="hidden md:flex gap-2">
            <a href="/auth/login">
              <button className="font-medium bg-[#11214D] border-2 text-white border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-[#11214D] transition">
                Login
              </button>
            </a>

            <a href="/auth/register">
              <button className="font-medium bg-[#11214D] border-2 text-white border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-[#11214D] transition">
                Sign Up
              </button>
            </a>
          </div>
        )}

        {token && (
          <div className="hidden md:flex gap-2">
            <button
              onClick={handleLogout}
              className="bg-[#11214D] text-white border-2 border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D] transition"
            >
              Log out
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-[#11214D] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg z-[999] flex flex-col items-center gap-4 py-4">
          {!token ? (
            <>
              <a href="/" className="font-semibold hover:underline">
                Home
              </a>
              <a href="#" className="font-semibold hover:underline">
                Services
              </a>
              <a href="#" className="font-semibold hover:underline">
                Products
              </a>
              <a href="#" className="font-semibold hover:underline">
                Contact
              </a>
              <div className="flex gap-3 mt-3">
                <a href="/auth/login">
                  <button className="font-medium bg-[#11214D] text-white px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D] transition">
                    Login
                  </button>
                </a>
                <a href="/auth/register">
                  <button className="font-medium bg-[#11214D] text-white px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border hover:border-[#11214D] transition">
                    Sign Up
                  </button>
                </a>
              </div>
            </>
          ) : (
            <>
              <a href="/dashboard" className="font-semibold hover:underline">
                Dashboard
              </a>
              <button
                onClick={handleLogout}
                className="bg-[#11214D] text-white border-2 border-transparent px-4 py-2 text-sm rounded-md hover:bg-white hover:text-[#11214D] hover:border-[#11214D] transition"
              >
                Log out
              </button>
            </>
          )}
        </div>
      )}

      <Outlet />
    </>
  );
}
