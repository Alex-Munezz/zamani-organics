import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Import your images here...
import moringa from './images/morition.jpeg';
import morioil from './images/morioil.jpeg';
import tumerioil from './images/tumerioil.jpeg';
import tumerisoap from './images/tumerisoap.jpeg';
import papaya from './images/papaya.jpeg';
import neemoil from './images/neemoil.jpeg';
import shea from './images/sheation.jpeg';
import oration from './images/oration.jpeg';

const products = [
  {
    id: 1,
    name: "Moringa Lotion",
    price: 400,
    image: moringa,
    benefits:
      "Infused with the powerful nutrients of Moringa, this lotion deeply nourishes your skin, leaving it soft, supple, and glowing. Packed with vitamins A, C, and E, it helps fight free radicals, improves skin elasticity, and promotes a radiant complexion. Ideal for dry, oily and sensitive skin.",
  },
  {
    id: 2,
    name: "Neem Oil",
    price: 200,
    image: neemoil,
    benefits:
      "Known as the 'miracle tree' oil, Neem is nature’s answer to acne and irritated skin. Its antibacterial and anti-inflammatory properties help cleanse the skin, clear blemishes, reduce scarring, and soothe itchy or dry patches. Also great for scalp care to fight dandruff and strengthen hair.",
  },
  {
    id: 3,
    name: "Shea Butter Lotion",
    price: 400,
    image: shea,
    benefits:
      "A creamy, luxurious blend that melts into your skin for intense hydration. Rich in vitamins A, E, and F, Shea Butter helps heal dry patches, reduce inflammation, and restore the skin’s natural moisture barrier. Perfect for daily use, especially during cold or dry seasons.",
  },
  {
    id: 4,
    name: "Moringa Oil",
    price: 200,
    image: morioil,
    benefits:
      "Pure, cold-pressed Moringa Oil is a lightweight elixir rich in omega fatty acids and antioxidants. It deeply penetrates the skin to fight premature aging, reduce fine lines, and revitalize dull complexions. Also great for strengthening hair and adding natural shine.",
  },
  {
    id: 5,
    name: "Turmeric Oil",
    price: 200,
    image: tumerioil,
    benefits:
      "A skincare treasure from ancient beauty rituals. Turmeric Oil brightens skin tone, fades scars and dark spots, and reduces redness with its powerful anti-inflammatory effects. Regular use brings out a healthy, natural glow while calming sensitive skin.",
  },
  {
    id: 9,
    name: "Pumpkin Seed Oil",
    price: 200,
    image: tumerioil,
    benefits:
      "Loaded with zinc, omega-3, and omega-6 fatty acids, Pumpkin Seed Oil promotes skin healing and boosts collagen production. It helps reduce fine lines, deeply nourishes dry areas, and supports youthful elasticity. Great for both face and body hydration.",
  },
  {
    id: 10,
    name: "Castor Seed Oil",
    price: 200,
    image: tumerioil,
    benefits:
      "Castor Seed Oil is a natural powerhouse for promoting thicker, fuller hair and lush eyelashes. Rich in ricinoleic acid, it deeply moisturizes skin, reduces pigmentation, and helps soothe inflamed or irritated areas. A must-have for beauty routines.",
  },
  {
    id: 11,
    name: "Aloe Vera Gel",
    price: 200,
    image: tumerioil,
    benefits:
      "Harvested from pure Aloe Vera plants, this gel calms sunburns, reduces inflammation, and speeds up skin healing. It’s ultra-hydrating yet non-greasy, making it ideal for sensitive or acne-prone skin. Also great for soothing aftershave or post-wax care.",
  },
  {
    id: 12,
    name: "Moringa Jelly",
    price: 300,
    image: tumerioil,
    benefits:
      "A refreshing blend of moringa and botanical extracts in jelly form. Provides lightweight hydration, reduces puffiness, and gives a cooling sensation for tired, stressed skin. Perfect for hot days or after sun exposure to maintain skin balance and elasticity.",
  },
  {
    id: 6,
    name: "Turmeric Soap",
    price: 250,
    image: tumerisoap,
    benefits:
      "Handcrafted with pure turmeric, this soap helps fade acne scars, brightens dull skin, and evens out your natural tone. Its anti-inflammatory properties calm redness, making it excellent for sensitive skin types. Leaves your skin fresh and revitalized after every wash.",
  },
  {
    id: 7,
    name: "Papaya Soap",
    price: 250,
    image: papaya,
    benefits:
      "Nature’s exfoliating wonder! Papaya enzymes gently remove dead skin cells, lighten hyperpigmentation, and encourage smoother, softer skin. Ideal for anyone wanting that natural, effortless glow. Suitable for all skin types.",
  },
  {
    id: 8,
    name: "Orange Peels Lotion",
    price: 400,
    image: oration,
    benefits:
      "Packed with vitamin C from natural orange peels, this lotion brightens, tones, and refreshes the skin. It helps minimize pores, balance oil production, and promote collagen synthesis for firmer, more radiant skin. Enjoy a citrus burst with every application.",
  },
];

function Products() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      <div className="px-6 py-12 md:px-20 text-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2e7d32] mb-4 animate-pulse">
          ✨ Discover Nature’s Magic ✨
        </h2>
        <p className="text-center text-[#8d6e63] mb-10 text-lg md:text-xl">
          Indulge in organic luxury. Your skin deserves it.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover group-hover:brightness-90 transition duration-300"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-[#2e7d32] mb-1">{product.name}</h3>
                  <p className="text-[#8d6e63] mb-2 font-medium">Ksh {product.price}</p>
                  <p className="text-gray-500 text-sm truncate">{product.benefits}</p>
                  <div className="mt-4">
                    <button className="w-full bg-[#2e7d32] text-white py-2 rounded-full shadow hover:bg-green-800 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#2e7d32] text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition z-50 animate-bounce"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
}

export default Products;
export { products };
