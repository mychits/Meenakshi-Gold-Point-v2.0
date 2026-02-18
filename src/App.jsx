import Navbar from "./Components/Navbar";
import SellGold from "./Components/SellGold";
import GoldRate from "./Components/GoldRate";
import Contact  from"./Components/Contact";
import ImageSlider from "./Components/ImageSlider";
import FAQs from "./Components/FAQs";
import CustomerReviews from "./Components/CustomerReviews";
import HowItWorks from "./Components/HowItWorks";
import SellGoldEase from "./Components/SellGoldEase";
import GetInTouch from "./Components/GetInTouch";
import { useEffect, useState } from "react";

function App() {

    const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Navbar />
      <ImageSlider />
      <SellGold />
        <HowItWorks/>
      <SellGoldEase/>
      <GoldRate />
      <FAQs/>
      <CustomerReviews/>
      <Contact/>
      {/* Auto Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative">
            <GetInTouch onClose={() => setShowForm(false) }/>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
