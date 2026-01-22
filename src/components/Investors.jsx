import React from 'react';

const Investors = () => {
  return (
    <section id="investors" className="py-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">For Investors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Turn agriculture into your most rewarding investment
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Investment Benefits */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Invest with Agrowing?</h3>
              <div className="space-y-6">
                {[
                  { 
                    icon: "📈", 
                    title: "Higher ROI", 
                    desc: "Better returns than gold or fixed deposits with 12-18% average returns",
                    color: "from-green-500 to-emerald-600"
                  },
                  { 
                    icon: "⏳", 
                    title: "Short Cycles", 
                    desc: "3-6 month investment periods aligned with crop seasons",
                    color: "from-blue-500 to-cyan-600"
                  },
                  { 
                    icon: "👁️", 
                    title: "Transparent Tracking", 
                    desc: "Real-time monitoring from seed to sale with full visibility",
                    color: "from-purple-500 to-indigo-600"
                  },
                  { 
                    icon: "🛡️", 
                    title: "Secure Distribution", 
                    desc: "Automated ROI distribution via escrow system for safety",
                    color: "from-amber-500 to-orange-600"
                  },
                  { 
                    icon: "🌱", 
                    title: "Sustainable Impact", 
                    desc: "Support real farmers while earning sustainable returns",
                    color: "from-teal-500 to-green-600"
                  },
                  { 
                    icon: "💼", 
                    title: "Easy Entry", 
                    desc: "Start with as little as ₹100 - no farming knowledge required",
                    color: "from-gray-500 to-blue-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl text-white">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - ROI & Process */}
          <div className="space-y-8">
            {/* ROI Calculation */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">ROI Calculation</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Returns are determined based on the projected market price (starting from MSP) and the final buyer's purchase value, 
                    ensuring fair profit sharing between investors and farmers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h5 className="font-bold text-xl text-gray-800 mb-4">How Returns Work:</h5>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Based on Minimum Support Price (MSP) as baseline
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Final price determined by buyer offers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Fair profit sharing between investors and farmers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Transparent calculation and distribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-12 py-4 rounded-xl text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full">
                Start Investing Today
              </button>
            </div>


            {/* Investment Process */}
            <div className="bg-gradient-to-br from-blue-500 to-green-600 p-6 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Simple Investment Process</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Browse Projects", desc: "Choose from verified farming projects" },
                  { step: "2", title: "Invest", desc: "Start with as little as ₹5,000" },
                  { step: "3", title: "Track Growth", desc: "Monitor your investment in real-time" },
                  { step: "4", title: "Receive Returns", desc: "Get profits after harvest cycle" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                    <div className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-green-100 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;