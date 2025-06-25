import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Products from './Products.js';
import ProductDetail from './ProductDetail.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Contact from './Contact.js';

function NotFound() {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-100 via-white to-green-100 text-center">
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute animate-pulse text-[6rem] opacity-20 select-none">🌸✨💫</div>
        <h2 className="text-6xl md:text-8xl font-extrabold text-red-500 animate-bounce mb-6 drop-shadow-lg">
          404
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-[#2e7d32] mb-4 animate-fade-in-down">
          Uh-oh! Looks like you wandered off the garden path...
        </h3>

        <p className="max-w-md text-[#5d4037] text-lg mb-6 animate-fade-in-up">
          But don’t worry — we’ll help you find your way back to glowing skin and good vibes 🌿
        </p>

        <Link
          to="/"
          className="bg-[#2e7d32] text-white px-5 py-3 rounded-full shadow-md hover:bg-green-800 transition transform hover:scale-105 animate-fade-in-up"
        >
          🌱 Take Me Home
        </Link>
        
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
