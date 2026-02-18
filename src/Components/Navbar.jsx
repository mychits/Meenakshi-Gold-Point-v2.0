import { useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram 
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};


  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      
      <div className="flex items-center justify-between px-4 md:px-16 h-16">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <img 
            src="/Untitled design (2).png" 
            alt="Logo" 
            className="h-10 md:h-14 object-contain"
          />
          <span className="text-lg md:text-xl font-bold">
            Meenakshi Gold Point
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li onClick={() => scrollTo("sell-gold")} className="hover:text-yellow-400 cursor-pointer">Sell Gold</li>
          <li onClick={() => scrollTo("gold-rate")} className="hover:text-yellow-400 cursor-pointer">Gold Rate</li>
          <li onClick={() => scrollTo("faq")} className="hover:text-yellow-400 cursor-pointer">FAQ</li>
          <li onClick={() => scrollTo("customer-reviews")} className="hover:text-yellow-400 cursor-pointer">Customer Reviews</li>
          <li onClick={() => scrollTo("contact")} className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.facebook.com/MyChits" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><FaFacebook /></a>
          <a href="https://www.youtube.com/@MyChit-z6d" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><FaYoutube /></a>
          <a href="https://www.instagram.com/my_chits/" target="_blank" rel="noreferrer" className="hover:text-yellow-400"><FaInstagram /></a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-6 pb-6 space-y-4 text-sm font-medium">
          <div onClick={() => scrollTo("sell-gold")} className="hover:text-yellow-400 cursor-pointer">Sell Gold</div>
          <div onClick={() => scrollTo("gold-rate")} className="hover:text-yellow-400 cursor-pointer">Gold Rate</div>
          <div onClick={() => scrollTo("faq")} className="hover:text-yellow-400 cursor-pointer">FAQ</div>
          <div onClick={() => scrollTo("customer-reviews")} className="hover:text-yellow-400 cursor-pointer">Customer Reviews</div>
          <div onClick={() => scrollTo("contact")} className="hover:text-yellow-400 cursor-pointer">Contact</div>

          <div className="flex gap-4 pt-4">
            <a href="https://www.facebook.com/MyChits" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com/@MyChit-z6d" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/my_chits/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
