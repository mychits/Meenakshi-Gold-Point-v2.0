import { FaHandHoldingUsd, FaMicroscope, FaBalanceScale, FaCoins, FaMoneyCheckAlt } from "react-icons/fa";
import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      step: 1,
      title: "Visit the Meenakshi Gold",
      description: "Customers give their Gold to Meenakshi Gold Point for valuation",
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

  return (
   <section
  className="w-full py-16 mx-auto relative overflow-hidden"
  style={{ backgroundColor: "var(--color-blue-900)" }}
>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">How It Works</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Steps container */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-blue-600/50 z-0"></div>
          <div 
            className="hidden lg:block absolute top-16 left-0 h-0.5 bg-yellow-400 transition-all duration-500 z-0"
            style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
          ></div>
          
          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map(({ step, title, description, icon }) => (
              <div 
                key={step} 
                className="flex flex-col items-center text-center group cursor-pointer"
                onMouseEnter={() => setActiveStep(step)}
              >
                {/* Step circle */}
                <div className={`relative mb-4 transition-all duration-300 ${activeStep >= step ? 'scale-105' : ''}`}>
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep >= step 
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-400/30' 
                      : 'bg-[#0667a4] '
                  }`}>
                    <div className={`text-3xl transition-all duration-300 ${
                      activeStep >= step ? 'text-blue-900' : 'text-yellow-400'
                    }`}>
                      {icon}
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep >= step 
                      ? 'bg-blue-900 text-yellow-400' 
                      : 'bg-yellow-400 text-blue-900'
                  }`}>
                    {step}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="mt-3 max-w-xs mx-auto">
                  <h3
                    className={`font-semibold mb-2 transition-all duration-300 ${activeStep >= step ? "text-yellow-400" : "text-white"
                      }`}
                  >
                    {title}
                  </h3>

                  <p className="text-blue-100 text-sm leading-relaxed opacity-90 text-center max-w-[220px] mx-auto">
                    {description}
                  </p>

                </div>

              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}