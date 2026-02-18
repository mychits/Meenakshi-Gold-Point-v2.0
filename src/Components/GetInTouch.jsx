import { useState } from "react";

function GetInTouch({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will contact you shortly.");
  };

  return (
 <div className="min-h-[40vh] flex items-center justify-center px-3 py-4">
  <div className="relative bg-white shadow-2xl rounded-2xl w-full max-w-3xl p-6 md:p-10">


        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        

        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Get In Touch
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Have questions about selling your gold? Our experts are here to help.
        </p>

          <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                autoComplete="off"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 ">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 outline-none"
              placeholder="Tell us about your requirement"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-3 rounded-xl hover:from-yellow-600 hover:to-amber-700 transition shadow-lg"
          >
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
