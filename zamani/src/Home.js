import { useState, useEffect } from "react";
import './App.css';
import moringa from './images/moringa.webp';
import shea from './images/shea.jpg';
import neem from './images/neem.jpeg';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const products = [
  {
    name: "Moringa Oil",
    description: "Rich in antioxidants for glowing skin and strong hair.",
    image: moringa,
  },
  {
    name: "Neem Oil",
    description: "Perfect for cleansing skin and scalp care routines.",
    image: neem,
  },
  {
    name: "Shea Butter",
    description: "Deep hydration for smooth, soft, beautiful skin.",
    image: shea,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const allProducts = () => {
    navigate('/products');
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const product = products[currentIndex];

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-orange-100 font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-6 leading-tight">
            Skincare, <span className="text-[#8d6e63]">Straight from Nature</span><br /> To Your Beautiful Skin & Hair
          </h2>
          <p className="text-[#8d6e63] text-lg mb-8">
            Organic skincare essentials — Moringa, Shea Butter, Neem & more.
          </p>
          <Link 
          to="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Zamani%20Organics...."
          target="_blank"
          rel="noreferrer"
          className="bg-[#2e7d32] text-white px-6 py-3 rounded-full shadow hover:bg-green-800 transition">
            Order via WhatsApp
          </Link>
        </div>

        <div className="flex flex-col items-center text-center mt-10 md:mt-0">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl shadow-xl w-[350px] md:w-[450px] mb-4"
          />
          <h3 className="text-2xl font-bold text-[#2e7d32]">{product.name}</h3>
          <p className="text-[#8d6e63] max-w-sm mt-2">{product.description}</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? products.length - 1 : currentIndex - 1
                )
              }
              className="bg-[#2e7d32] text-white px-3 py-1 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === products.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="bg-[#2e7d32] text-white px-3 py-1 rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      <br /><br /><br />
      {/* Why Choose Us */}
      <section className="px-6 py-16 md:px-28 bg-gradient-to-br from-orange-50 to-green-100 text-black text-center">
  <h3 className="text-4xl md:text-5xl font-extrabold text-[#2e7d32] mb-6 drop-shadow-md">
    Why Everyone Loves Zamani Organics
  </h3>
  <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#5d4037] leading-relaxed">
    ✨ Because your skin deserves more than just skincare — it deserves a *P.E.P ritual*. <br /> 
    <span className="font-semibold text-[#2e7d32]">Pure. Ethical. Powerful.</span> <br /><br />
    Straight from nature’s treasure chest — no nasties, no shortcuts. Just rich, natural goodness crafted with love, for that *glow-up* you’ve been manifesting. 🌿💚
  </p>
  <br /><br />
  <h3 className="text-2xl font-bold text-[#2e7d32] mb-4">Ready for your *P.E.P ritual*?</h3>
  <div className="mt-8 flex justify-center">
    <Link to='/products'>
    <button className="bg-[#2e7d32] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-green-800 hover:scale-105 transition">
    ✨ Click me ✨
    </button>
    </Link>
  </div>
</section>
<br /><br />


      {/* The Zamani Difference */}
      <section className="px-6 py-12 md:px-20 bg-[#2e7d32] text-white text-center rounded-2xl mx-4 md:mx-20 shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">✨ The Zamani Difference ✨</h3>
        <div className="max-w-3xl mx-auto text-lg space-y-3 leading-relaxed">
          <p>Say goodbye to harsh chemicals and hello to pure, plant-powered skincare.</p>
          <ul className="list-disc list-inside text-left text-white/90 text-base md:text-lg">
            <li><strong>✔ 100% Natural:</strong> No artificial additives, no drama — just goodness.</li>
            <li><strong>✔ Ethically Sourced:</strong> Supporting small farmers & local communities.</li>
            <li><strong>✔ Skin-Loving Benefits:</strong> Hydrate, nourish & protect — naturally.</li>
            <li><strong>✔ Eco-Friendly Packaging:</strong> Because we love Mama Earth 🌍.</li>
          </ul>
        </div>
      </section>

      {/* Product Highlights */}
      <br /><br /><br />
      <section className="px-6 py-16 md:px-28 text-center border-t border-black">
  <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e7d32] mb-10 drop-shadow-md">
    Discover Nature’s Best 🌿
  </h2>

  <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#5d4037] opacity-90 mb-12">
    Dive into our handcrafted collection of organic skincare delights. Each product is like a *love letter* to your skin — packed with nature’s finest, ready to glow you up naturally.
  </p>

  <div className="grid gap-8 md:grid-cols-3">
    {products.map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-3xl shadow-xl hover:scale-105 transition transform duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="rounded-2xl mb-4 w-full h-56 object-cover"
        />
        <h3 className="font-bold text-2xl text-[#2e7d32] mb-2">{item.name}</h3>
        <p className="text-[#8d6e63] mb-4">{item.description}</p>
        <Link to="/products">
          <button className="text-[#2e7d32] font-semibold hover:underline hover:text-green-800 transition">
            More Info →
          </button>
        </Link>
      </div>
    ))}
  </div>

  <div className="mt-12">

    <button
      onClick={allProducts}
      className="bg-[#2e7d32] text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-green-800 hover:scale-105 transition"
    >
      View All Products 🌱
    </button>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="px-6 py-16 md:px-20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2e7d32]">💬 What Our Customers Say</h3>
        <blockquote className="italic text-[#5d4037] text-lg max-w-2xl mx-auto">
          "Zamani Organics has changed my skincare game completely. My skin feels soft, fresh, and healthy every single day. Love that it’s all-natural!"
        </blockquote>
        <p className="mt-4 font-semibold text-[#2e7d32]">— Lydia, Nairobi 🇰🇪</p>
      </section>

            {/* Scroll to Top Button */}
            {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#2e7d32] text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
}

export default App;
