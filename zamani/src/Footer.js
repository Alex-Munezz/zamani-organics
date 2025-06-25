import logo from './images/logo.png';

function Footer() {
    return (
      <footer className="bg-[#2e7d32] text-white py-6 px-4 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  
          {/* Brand Info */}
          <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Zamani Organics Logo"
            className="w-26 h-24 mb-4 rounded-full object-cover"
          />
          <h2 className="text-3xl font-bold mb-1">Zamani Organics</h2>
          <h2 className="text-1xl  text-black font-bold mb-1">FROM NATURE. FOR YOU</h2>
          <p className="text-sm opacity-80">
            Pure. Natural. Organic skincare for radiant, healthy skin.
          </p>
        </div>
  
          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl mb-2 text-black">Quick Links</h3>
            <ul className="text-sm space-y-3 opacity-90">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">All Products</a></li>
              {/* <li><a href="/cart" className="hover:underline">Cart</a></li> */}
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Zamani%20Organics...."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Order via WhatsApp
                </a>
              </li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-2xl mb-2 text-black">Connect with Us</h3>
            <div className="flex gap-6 justify-center md:justify-start text-lg">
              <a href="https://www.tiktok.com/zamani_organics"  
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300">🌿</a> {/* Replace with actual icons/links */}
              <a href="https://www.instagram.com/zamani_organics" 
               target="_blank"
               rel="noreferrer"
               className="hover:text-gray-300">📸</a> {/* Instagram */}
              <a href="https://www.facebook.com/zamani_organics" 
               target="_blank"
               rel="noreferrer"
               className="hover:text-gray-300">📘</a> {/* Facebook */}
              <a href="https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Zamani%20Organics!"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300">📞</a> {/* Phone */}
            </div>
          </div>
        </div>
  
        {/* Bottom Copyright */}
        <div className="text-center mt-6 border-t border-green-900 pt-4 text-xs text-gray-200 opacity-80">
          &copy; {new Date().getFullYear()} Zamani Organics. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  