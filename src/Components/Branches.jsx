export default function Branches() {
  return (
    <section id="branches" className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Branches
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {["Hyderabad", "Bangalore", "Chennai"].map((city, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{city}</h3>
            <p className="text-gray-600">
              Main Road, Near Gold Market
            </p>
            <p className="text-gray-600 mt-2">
              📞 +91 99999 99999
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
