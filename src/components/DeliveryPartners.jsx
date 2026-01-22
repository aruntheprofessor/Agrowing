import React from 'react';

const DeliveryPartners = () => {
  return (
    <section id="deliveryPartners" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">For Delivery Partners</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Empowering Local Load Vehicle Drivers with Independent Income 🚚
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            {/* Introduction Card */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                India's First Agricultural Delivery Network
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Agrowing introduces India's first delivery network for independent local load vehicle drivers — 
                just like bike and car delivery partners in Swiggy or Zomato, but for agricultural logistics.
              </p>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl text-white">
                <p className="text-lg font-semibold text-center">
                  Join the revolution in agricultural logistics and <br></br>Start Earning!
                </p>
              </div>
           
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">How It Works</h3>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Register & Verify", desc: "Sign up as a delivery partner with your vehicle details" },
                  { step: "2", title: "Accept Deliveries", desc: "Get nearby agricultural delivery tasks" },
                  { step: "3", title: "Complete Trips", desc: "Pick up and deliver farm produce" },
                  { step: "4", title: "Get Paid", desc: "Receive instant payment upon delivery completion" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="bg-white text-indigo-600 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {item.step}
                    </div>
                    <div className="flex-1 mb-2">
                      <h4 className="font-semibold text-white text-sm md:text-base">{item.title}</h4>
                      <p className="text-indigo-100 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Features */}
          <div className="space-y-6">
            {/* Partner Benefits */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Why Join as Delivery Partner?</h3>
              <div className="grid gap-4">
                {[
                  { 
                    icon: "💰", 
                    title: "Fair Income", 
                    desc: "Earn competitive delivery fees per completed trip",
                    color: "from-green-500 to-emerald-600"
                  },
                  { 
                    icon: "🕒", 
                    title: "Flexible Schedule", 
                    desc: "Work independently and choose your delivery times",
                    color: "from-blue-500 to-cyan-600"
                  },
                  { 
                    icon: "📱", 
                    title: "Easy App Access", 
                    desc: "Accept deliveries through our mobile application",
                    color: "from-purple-500 to-indigo-600"
                  },
                  { 
                    icon: "⚡", 
                    title: "Instant Payments", 
                    desc: "Get paid immediately after delivery completion",
                    color: "from-amber-500 to-orange-600"
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

            {/* Financial Info */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Financial Benefits</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/20 p-3 rounded-lg">
                  <span className="text-blue-100">Delivery Costs Included</span>
                  <span className="font-bold text-white">10% of Project Funds</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 p-3 rounded-lg">
                  <span className="text-blue-100">Free for Farmers/Buyers</span>
                  <span className="font-bold text-white">✅ Zero Cost</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 p-3 rounded-lg">
                  <span className="text-blue-100">Driver Payments</span>
                  <span className="font-bold text-white">💳 Instant Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Types & Requirements */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl border border-indigo-200">
          <div className="text-center mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Vehicle Types We Support</h4>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: "🚛", type: "Trucks", capacity: "5-10 tons" },
                { icon: "🚚", type: "Mini Trucks", capacity: "2-5 tons" },
                { icon: "🛻", type: "Pickups", capacity: "1-2 tons" },
                { icon: "🚜", type: "Tractors", capacity: "3-8 tons" }
              ].map((vehicle, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center">
                  <div className="text-3xl mb-2">{vehicle.icon}</div>
                  <h5 className="font-bold text-gray-800 text-sm md:text-base">{vehicle.type}</h5>
                  <p className="text-gray-600 text-xs md:text-sm">{vehicle.capacity}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              🚚 Become a Delivery Partner Today
            </button>
            <p className="text-gray-600 text-sm mt-3">
              Start earning with your vehicle - Join India's agricultural delivery revolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPartners;