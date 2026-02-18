import { useState } from "react";
import axios from "axios";

export default function GoldRate() {

  const [goldData, setGoldData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGoldPrice = () => {
    setLoading(true);

    axios
      .get("https://www.goldapi.io/api/XAU/INR", {
        headers: {
          "x-access-token": "goldapi-6i5sml94qw1d-io",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setGoldData(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
<section
      id="gold-rate"
      className="py-10 px-6 md:px-20 bg-gradient-to-br from-yellow-50 to-white"
    >

     <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0667a4] mb-2">Today’s Gold Rate</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
      

      <div className="max-w-xl mx-auto bg-blue-900 text-white rounded-2xl p-10 text-center shadow-xl">
        <p className="text-lg mb-2 tracking-wide">24K Gold</p>

        <p className="text-4xl font-bold mb-4">
          {goldData?.price_gram_24k ? `₹ ${goldData?.price_gram_24k} / gram` : "—"}
        </p>

        <button
          onClick={fetchGoldPrice}
          disabled={loading}
          className="mt-6 px-8 py-3 rounded-full bg-yellow-400 text-blue-900 font-semibold
                     hover:bg-yellow-300 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Fetching..." : "Get Live Rate"}
        </button>

        {/* {error && (
          <p className="mt-4 text-sm text-red-300">{error}</p>
        )} */}

        <p className="mt-6 text-sm text-blue-200">
          * Click button to get latest gold rate
        </p>
      </div>
    </section>
  );
}
