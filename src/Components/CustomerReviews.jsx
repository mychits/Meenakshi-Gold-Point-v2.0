import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Basavaraju",
    location: "Bangalore",
    image:
      "./customerImage1.jpeg",
    review:"I had a great experience selling my gold to the Meenakshi Gold. The entire process was transparent and hassle-free, with accurate valuation and prompt payment. The team was professional and trustworthy, which gave me complete confidence. I have already recommended Meenakshi Gold to my friends and relatives, who are equally satisfied with the service.",
  },
  {
  id: 2,
  name: "Sunitha Reddy",
  location: "Bangalore",
  image: "./customerImage1.avif",
  review:
    "Selling my gold to Meenakshi Gold was a smooth and stress-free experience. The valuation was fair and clearly explained, and the payment was credited without any delay. The staff was polite and professional, making the entire process comfortable. I would definitely recommend Meenakshi Gold to anyone looking for a reliable place to sell gold.",
},

  // you can add more reviews here
];

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const { name, location, image, review } = reviews[index];

  return (
    <section id="customer-reviews" className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        {/* <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10">
          What Our Customer Speaks
        </h2> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0667a4] mb-2">  What Our Customer Speaks?</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>

          {/* Review Content */}
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed text-base">
              {review}
            </p>

            <div className="mt-6 text-right">
              <p className="font-medium text-gray-900">
                {name} <span className="text-gray-500">| {location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          <span className="text-3xl">&#8249;</span>
        </button>

        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          <span className="text-3xl">&#8250;</span>
        </button>
      </div>
    </section>
  );
}
