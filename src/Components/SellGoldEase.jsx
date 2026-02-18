import { useState } from 'react';
import { FaHandHoldingUsd, FaMicroscope, FaBalanceScale, FaCoins, FaMoneyCheckAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function SellGoldEase() {
  const [activeStep, setActiveStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const steps = [
    {
      step: 1,
      title: "Visit the Gold Point",
      description: "Customers give their Gold to Muthoot Gold Point for valuation",
      icon: <FaHandHoldingUsd />,
    },
    {
      step: 2,
      title: "Gold Cleaning",
      description: "All dirt is removed from your Gold with ultrasonic machines in front of you",
      icon: <FaMicroscope />,
    },
    {
      step: 3,
      title: "Gold Valuation",
      description: "Value, weight & purity of Gold is checked on advanced XRF machines in front of you",
      icon: <FaBalanceScale />,
    },
    {
      step: 4,
      title: "Gold Rate",
      description: "Gold is valued as per the current market price",
      icon: <FaCoins />,
    },
    {
      step: 5,
      title: "Get an Instant Payment",
      description: "Get up to Rs 10,000 as cash. Amounts higher than Rs 10,000 instantly paid to your bank account via NEFT/IMPS/RTGS",
      icon: <FaMoneyCheckAlt />,
    },
  ];

  const navItems = [
    { name: "Gold Point", active: true },
    { name: "About Us", active: false },
    { name: "Products", active: false },
    { name: "Services", active: false },
    { name: "Careers", active: false },
    { name: "Customer Care", active: false },
    { name: "Blog", active: false },
    { name: "Contact Us", active: false },
  ];

  return (
    <div className="bg-white">

      {/* Features Section */}
      <section className="py-2 mt-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0667a4] mb-2">Why Choose Meenakshi Gold Point?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <FaBalanceScale className="text-blue-900 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0667a4] mb-2">Fair Valuation</h3>
              <p className="text-gray-600">Get the best price for your gold with our transparent valuation process using advanced XRF technology.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <FaMoneyCheckAlt className="text-blue-900 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0667a4] mb-2">Instant Payment</h3>
              <p className="text-gray-600">Receive immediate payment for your gold through cash, NEFT, IMPS, or RTGS transfer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <FaHandHoldingUsd className="text-blue-900 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#0667a4] mb-2">Trusted Service</h3>
              <p className="text-gray-600">With years of experience and thousands of satisfied customers, we are your trusted gold exchange partner.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}