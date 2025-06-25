import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png'; // ✅ adjust to your correct logo path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProducts = location.pathname === '/products';
  // const isCart = location.pathname === '/cart';
  const isContact = location.pathname === '/contact';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Logo for Mobile + Logo & Name for Desktop */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Zamani Organics Logo"
            className="w-15 h-14 rounded-full object-cover"
          />
          <h1 className="hidden md:block text-2xl font-bold text-[#2e7d32]">Zamani Organics</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 items-center">
          {!isHome && (
            <Link
              to="/"
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Home
            </Link>
          )}
          {!isProducts && (
            <Link
              to="/products"
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              All Products
            </Link>
          )}
          {/* {!isCart && (
            <Link
              to="/cart"
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Cart
            </Link>
          )} */}
           {!isContact && (
            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Contact Us
            </Link>
          )}
          <Link
            to="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Alex...."
            target="_blank"
            rel="noreferrer"
            className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
          >
            Order Now
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#2e7d32] focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {!isHome && (
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Home
            </Link>
          )}
          {!isProducts && (
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              All Products
            </Link>
          )}
          {/* {!isCart && (
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Cart
            </Link>
          )} */}
          {!isContact && (
            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              Contact Us
            </Link>
          )}
          <Link
            to="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Alex...."
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#2e7d32] text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
