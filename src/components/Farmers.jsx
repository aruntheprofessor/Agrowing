import React from 'react';
import { FaMoneyBillWave, FaTruck, FaChartLine, FaShieldAlt, FaMobileAlt, FaHandshake, FaSeedling, FaDollarSign, FaListAlt } from 'react-icons/fa';
import { GiPlantWatering } from 'react-icons/gi';

const Farmers = () => {
  return (
    <section id="farmers" className="min-h-screen py-8 bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-800 mb-4">For Farmers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-green-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-2xl text-gray-700 font-medium">
            Empowering the Backbone of Our Agricultural Ecosystem
          </p>
        </div>

        {/* Main Heading and Description - Centered */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-green-800 mb-3 leading-tight">
            Empowering Farmers with Funding & Market Access
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            At Agrowing, farmers are the true creators of demand. Access funding, markets, and logistics support 
            through our transparent digital platform.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-7 items-stretch">
          
          {/* What Farmers Can Do Box - Full Left Side */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-3xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <GiPlantWatering className="text-1xl text-green-600" />
              </div>
              What Farmers Can Do
            </h4>
            <div className="grid md: gap-5">
              {[
                { icon: FaListAlt, text: "Post cultivation projects online" },
                { icon: FaDollarSign, text: "Receive transparent funding" },
                { icon: FaHandshake, text: "Choose best buyer offers" },
                { icon: FaTruck, text: "Get free logistics support" },
                { icon: FaChartLine, text: "Explore market demand" },
                { icon: FaMoneyBillWave, text: "Earn 30% profit share" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-xl hover:from-green-100 hover:to-amber-100 transition-all duration-300 border border-green-100 hover:border-green-300 group"
                >
                  <div className="bg-white p-3 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                    <item.icon className="text-lg text-green-600" />
                  </div>
                  <span className="text-lg text-gray-800 font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Benefits & Mobile App Stacked */}
          <div className="space-y-8">
            {/* Exclusive Benefits Box */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 ">
              <h4 className="text-2xl font-bold text-green-800 mb-4 text-center flex items-center justify-center gap-3">
                <div className="bg-amber-100 p-3 rounded-full">
                  <FaMoneyBillWave className="text-xl text-amber-600" />
                </div>
                Exclusive Benefits
              </h4>
              <div className="space-y-4">
                {[
                  { icon: FaMoneyBillWave, text: "30% Profit Share" },
                  { icon: FaTruck, text: "Free Logistics" },
                  { icon: FaChartLine, text: "Market Insights" },
                  { icon: FaShieldAlt, text: "Price Protection" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl hover:bg-white transition-all duration-300 border border-green-100 hover:border-green-300 group"
                  >
                    <div className="bg-amber-100 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                      <item.icon className="text-lg text-amber-600" />
                    </div>
                    <span className="text-lg text-gray-800 font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile App Box */}
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300 ">
              <div className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="bg-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <FaMobileAlt className="text-2xl text-amber-600" />
                  </div>
                  <h5 className="font-bold text-2xl text-amber-800 mb-3">Mobile App</h5>
                  <p className="text-amber-700 mb-6 text-lg">Easy access on your smartphone</p>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
                  Download App Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Centered */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-16 py-4 rounded-xl text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto border border-green-600">
            <div className="bg-amber-400 p-2 rounded-full">
              <FaSeedling className="text-lg text-green-900" />
            </div>
            Start Your Farming Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Farmers;