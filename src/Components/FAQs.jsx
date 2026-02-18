import React, { useState } from "react";

export default function FAQs() {
  const faqs = [
  {
    question: "How can I sell my gold at Meenakshi Gold Point?",
    answer:
      "You can walk into any of our branches with your gold. We test your gold purity in front of you using certified machines and offer the best market price instantly."
  },
  {
    question: "Is gold testing done in front of customers?",
    answer:
      "Yes. Gold testing is completely transparent and done in front of you using government-approved purity testing machines."
  },
  {
    question: "How is the gold price calculated?",
    answer:
      "Gold price is calculated based on the live market rate, purity of your gold (22K/24K), and weight after melting or testing. No hidden charges are applied."
  },
  {
    question: "Do you buy all types of gold?",
    answer:
      "Yes, we buy all types of gold including jewellery, coins, biscuits, broken gold, and old or damaged ornaments."
  },
  {
    question: "How quickly will I receive the payment?",
    answer:
      "Payment is made instantly after evaluation via cash, UPI, or direct bank transfer, as per customer preference."
  },
  {
    question: "Are there any charges or deductions?",
    answer:
      "No. We do not charge any testing, melting, or service fees. You receive the full value of your gold based on purity."
  },
  {
    question: "Is Meenakshi Gold Point a registered and trusted company?",
    answer:
      "Yes, Meenakshi Gold Point is a legally registered gold buying company that follows all government regulations and compliance standards."
  },
  {
    question: "Can I sell gold without a bill?",
    answer:
      "Yes, you can sell gold even if you do not have the original bill. A valid government-issued ID is required for verification."
  },
  {
    question: "What documents are required to sell gold?",
    answer:
      "You need to carry a valid government-issued ID such as Aadhaar, PAN card, or driving license."
  },
  {
    question: "Is my gold safe during the evaluation process?",
    answer:
      "Absolutely. Your gold is handled with utmost care and tested securely in your presence throughout the process."
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="w-full bg-gray-100  pb-4">
      <div className="max-w-6xl mx-auto px-6 pt-10">

        {/* Header */}
        <div className="text-center mb-14">
          {/* <h1 className=" text-3xl font-semibold text-blue-900">
            Frequently asked questions
          </h1> */}
        
            <h2 className="text-3xl md:text-4xl font-bold text-[#0667a4] mb-2">  Frequently asked questions</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
    
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about MEENAKSHI GOLD,
            our plans, payments, and security.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h4 className="text-gray-800 font-medium text-lg">
                  {faq.question}
                </h4>
                <span className="text-orange-500 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-4 text-gray-600 leading-7">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
