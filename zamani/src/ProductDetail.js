import { useParams, useNavigate } from 'react-router-dom';
import { products } from './Products';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl font-semibold">
        Oops! Product not found.
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleOrder = () => {
    const message = `Hello Zamani Organics! I would like to order:

🛒 *Product*: ${product.name}
🔢 *Quantity*: ${quantity}
💰 *Total Price*: Ksh ${totalPrice}

Kindly assist with the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=254768453442&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />

      <div className="relative px-6 py-12 md:px-20 flex flex-col md:flex-row gap-10 items-center">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 text-4xl font-bold transition"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="rounded-3xl shadow-xl w-[350px] md:w-[450px] object-cover hover:brightness-90 transition"
        />

        {/* Product Info */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e7d32] mb-4">
            {product.name}
          </h2>
          <p className="text-[#8d6e63] text-lg mb-4">{product.benefits}</p>

          <div className="text-2xl font-bold text-[#2e7d32] mb-2">Unit Price: Ksh {product.price}</div>
          <div className="text-xl font-semibold text-[#4e342e] mb-6">Total: Ksh {totalPrice}</div>

          {/* Quantity with buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="bg-[#2e7d32] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-800 transition"
            >
              -
            </button>

            <span className="text-2xl font-bold">{quantity}</span>

            <button
              onClick={increaseQuantity}
              className="bg-[#2e7d32] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-800 transition"
            >
              +
            </button>
          </div>

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className="bg-[#2e7d32] text-white px-8 py-3 rounded-full shadow-md hover:bg-green-800 hover:scale-105 transition font-semibold"
          >
            Order Now via WhatsApp 📲
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
