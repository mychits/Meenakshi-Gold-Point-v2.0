import React from "react";
import { FaHandHoldingUsd, FaMicroscope, FaBalanceScale, FaCoins, FaMoneyCheckAlt, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";


export default function Contact() {

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/MyChits",
      icon: <FaFacebookF />,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/my_chits/",
      icon: <FaInstagram />,
      color: "hover:text-pink-500",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FaTwitter />,
      color: "hover:text-sky-500",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      icon: <FaYoutube />,
      color: "hover:text-red-600",
    },
  ];

  return (
    
    // <section
    //   id="contact"
    //   className="py-20 px-6 md:px-20 bg-blue-900 text-white"
    // >
    //   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    //     Contact Us
    //   </h2>

    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    //     {/* Column 1 - Address */}
    //     <div>
    //       <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
    //       <p className="mb-2">📍 11/36-25, Third Floor, 2nd Main</p>
    //       <p className="mb-2">
    //         📍 Kathriguppe Main Road, Banashankari Stage 3
    //       </p>
    //       <p className="mb-2">📞 +91 94839 00777</p>
    //       <p>✉️ info.mychits@gmail.com</p>
    //     </div>

    //     {/* Column 2 - Follow Us */}
    //     <div>
    //       <h3 className="text-xl font-semibold mb-4">Follow Us :</h3>
    //       <div className="flex gap-4">
    //         {socialLinks.map((item, index) => (
    //           <button
    //             key={index}
    //             onClick={() => window.open(item.url, "_blank")}
    //             aria-label={item.name}
    //             className={`text-blue-600 text-2xl transition duration-300 ${item.color}`}
    //           >
    //             {item.icon}
    //           </button>
    //         ))}

    //       </div>
    //     </div>

    //     {/* Column 3 - Form */}
    //     <form className="space-y-4">
    //       <input
    //         className="w-full p-3 rounded text-white bg-gray-800"
    //         placeholder="Name"
    //       />
    //       <input
    //         className="w-full p-3 rounded text-white bg-gray-800"
    //         placeholder="Phone"
    //       />
    //       <textarea
    //         className="w-full p-3 rounded text-white bg-gray-800"
    //         rows="4"
    //         placeholder="Message"
    //       ></textarea>
    //       <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
    //         Submit
    //       </button>
    //     </form>

    //   </div>
    // </section>

      <footer id="contact" className=" text-white py-12 px-4"  style={{ backgroundColor: "var(--color-blue-900)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">MGP</span>
                </div>
                <h3 className="text-xl font-bold">Meenakshi Gold Point</h3>
              </div>
              <p className="text-blue-100 text-sm">Your Trusted Gold Buying Partner</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Services</a></li>
                <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Products</a></li>
                <li><a href="#" className="text-blue-100 hover:text-yellow-400 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
                   <div>
        {/* <h3 className="text-xl font-semibold mb-4">Get in Touch</h3> */}
         <p className="mb-2">📍 11/36-25, Third Floor, 2nd </p>
       <p className="mb-2 ml-3">
           Main Kathriguppe Main Road , 
       </p>
        <p className="mb-2 ml-3">
          Banashankari Stage 3 , Banglore
       </p>
        <p className="mb-2">📞 +91 94839 00777</p>
       <p>✉️ info.mychits@gmail.com</p>
    </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
              {/* <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition">
                  <FaYoutube />
                </a>
              </div> */}
               <form className="space-y-4">
      <input
            className="w-full p-3 rounded text-white bg-gray-800"
            placeholder="Name"
          />
          <input
            className="w-full p-3 rounded text-white bg-gray-800"
            placeholder="Phone"
          />
          <textarea
            className="w-full p-3 rounded text-white bg-gray-800"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
            Submit
          </button>
        </form>
            </div>
          </div>
          
       <div className="border-t border-lightgrey-900 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2026 Meenakshi Gold Point. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

  );
}
