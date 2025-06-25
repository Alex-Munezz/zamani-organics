import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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


  const [state, handleSubmit] = useForm("myzjnbob");

  if (state.succeeded) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-orange-100 to-white text-center p-6 overflow-hidden">
  
        {/* Endless Falling Flowers & Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={`set1-${i}`}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                fontSize: `${14 + Math.random() * 26}px`,
                color: ['#ff69b4', '#fff', '#ffd700', '#ffa500'][Math.floor(Math.random() * 4)],
              }}
            >
              {Math.random() > 0.5 ? '🌸' : (Math.random() > 0.5 ? '✨' : '🌟')}
            </div>
          ))}
          {[...Array(50)].map((_, i) => (
            <div
              key={`set2-${i}`}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                fontSize: `${14 + Math.random() * 26}px`,
                color: ['#ff69b4', '#fff', '#ffd700', '#ffa500'][Math.floor(Math.random() * 4)],
              }}
            >
              {Math.random() > 0.5 ? '🌸' : (Math.random() > 0.5 ? '✨' : '🌟')}
            </div>
          ))}
        </div>
  
        <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[#2e7d32] mb-4 animate-bounce drop-shadow-lg">
          🎉 Thank You! 🎉
        </h2>
        <p className="relative z-10 text-lg text-[#4e342e] max-w-md mb-6 leading-relaxed drop-shadow">
          Your message has been received with love 🌿✨ <br />
          Welcome to the <span className="font-bold text-[#2e7d32]">Zamani Family</span> 🧡
        </p>
  
        <button
          onClick={() => window.location.href = "/"}
          className="relative z-10 bg-[#2e7d32] text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 hover:scale-105 transition font-semibold"
        >
          Take Me Home 🏡
        </button>
  
        {/* Keyframes for infinite animation */}
        <style>{`
          @keyframes fall {
            0% {
              transform: translateY(-10%) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            position: absolute;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    );  
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-100 via-green-50 to-orange-50 text-gray-900">
      <Navbar />

      {/* Vibrant Hero */}
      <header className="bg-gradient-to-r from-[#2e7d32] to-green-700 text-white text-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 animate-pulse"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Let’s Talk!</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Whether you’re curious about a product, glowing review, or just wanna vibe — we’re here for it.
        </p>
      </header>

      {/* Wavy Separator */}
      <svg className="w-full h-12 md:h-20 text-orange-100" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,64L60,69.3C120,75,240,85,360,117.3C480,149,600,203,720,202.7C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>

      {/* Contact Form */}
      <section className="flex-1 px-6 py-12 md:px-20">
        <div className="max-w-3xl mx-auto bg-gray-200 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2e7d32] mb-8">Slide into Our Inbox 💌</h2>

          <form onSubmit={handleSubmit} 
          className="flex flex-col gap-6 text-gray-800"
          >
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-green-200 rounded-xl px-4 py-2 bg-orange-50 focus:outline-none focus:ring-4 focus:ring-[#2e7d32]/50"
              />
            <ValidationError 
              prefix="name" 
              field="name"
              errors={state.errors}
             />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-green-200 rounded-xl px-4 py-2 bg-orange-50 focus:outline-none focus:ring-4 focus:ring-[#2e7d32]/50"
              />
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-green-200 rounded-xl px-4 py-2 bg-orange-50 focus:outline-none focus:ring-4 focus:ring-[#2e7d32]/50"
              ></textarea>
              <ValidationError 
                 prefix="message" 
                 field="message"
                 errors={state.errors}
               />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#2e7d32] to-green-700 text-white py-3 rounded-full text-lg font-bold hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Animated contact bubbles */}
        <div className="mt-16 text-center text-gray-800 space-y-2">
          <h3 className="text-2xl font-extrabold text-[#2e7d32]">Other Ways to Reach Us</h3>
          <p>Email: <a href="mailto:support@zamaniorganics.com" className="underline hover:text-green-800">support@zamaniorganics.com</a></p>
          <p>Phone: <a href="tel:+254768453442" className="underline hover:text-green-800">+254 768 453 442</a></p>
          <a
            href="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Zamani%20Organics!"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-green-700 to-[#2e7d32] text-white mt-4 px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Chat on WhatsApp 💬
          </a>
        </div>
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

export default ContactUs;
