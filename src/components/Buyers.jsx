import React from 'react';

const Buyers = () => {
  return (
    <section id="buyers" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">For Buyers</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Buy Direct from Farmers — Fresh, Transparent, and Hassle-Free 🚜
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">How It Works</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed">
                  Post your crop requirements with quantity and price offer (above or equal to MSP).
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Farmers review and accept your offers in our transparent agricultural marketplace.
                </p>
              </div>
            </div>

            {/* Buying Process */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Simple Buying Process</h3>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Post Requirements", desc: "Specify crop, quantity, and price" },
                  { step: "2", title: "Receive Offers", desc: "Farmers accept your offer" },
                  { step: "3", title: "Confirm Order", desc: "Secure transaction on platform" },
                  { step: "4", title: "Track Delivery", desc: "Monitor farm to location" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="bg-white text-orange-600 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm md:text-base">{item.title}</h4>
                      <p className="text-orange-100 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                Start Buying Directly
              </button>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Buyer Benefits</h3>
              <div className="grid gap-4">
                {[
                  { 
                    icon: "🧾", 
                    title: "Direct from Farmers", 
                    desc: "Purchase from verified farmers with quality assurance",
                    color: "from-green-500 to-emerald-600"
                  },
                  { 
                    icon: "🚛", 
                    title: "Free Delivery", 
                    desc: "Free logistics with every confirmed order",
                    color: "from-blue-500 to-cyan-600"
                  },
                  { 
                    icon: "📦", 
                    title: "Real-time Tracking", 
                    desc: "Live tracking via maps and updates",
                    color: "from-purple-500 to-indigo-600"
                  },
                  { 
                    icon: "💬", 
                    title: "24/7 Support", 
                    desc: "Round-the-clock chat assistance",
                    color: "from-amber-500 to-orange-600"
                  },
                  { 
                    icon: "⭐", 
                    title: "Quality Guarantee", 
                    desc: "Quality verification and satisfaction guarantee on all purchases",
                    color: "from-red-500 to-pink-600"
                  },
                  { 
                    icon: "💰", 
                    title: "Competitive Pricing", 
                    desc: "Get the best prices by dealing directly with farmers",
                    color: "from-teal-500 to-green-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-2 rounded-lg mr-3 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <span className="text-xl text-white">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base md:text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>

        {/* Why Choose Direct Section */}
        <div className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl border border-amber-200">
          <div className="text-center">
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Why Choose Direct from Farmers?</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl mb-2">🌱</div>
                <h5 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Fresh Produce</h5>
                <p className="text-gray-600 text-xs md:text-sm">Farm-fresh directly from harvest</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Fast Delivery</h5>
                <p className="text-gray-600 text-xs md:text-sm">Quick farm to location logistics</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl mb-2">🔒</div>
                <h5 className="font-bold text-gray-800 mb-1 text-sm md:text-base">Secure Payments</h5>
                <p className="text-gray-600 text-xs md:text-sm">Safe payment processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buyers;