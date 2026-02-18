export default function SellGold() {
  return (
    <section id="sell-gold" className="py-10 px-6 md:px-20 bg-gray-50">
     {/* <h2 className="text-3xl md:text-4xl text-center font-bold text-[#0667a4] mb-2">
        Sell Gold at Best Price
      </h2> */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0667a4] mb-2"> Sell Gold at Best Price</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        Get instant cash for your gold with complete transparency and certified process.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Free Gold Testing",
          "Best Market Price",
          "Instant Cash Payment",
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-600">
              100% transparent process with government-approved testing machines.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
