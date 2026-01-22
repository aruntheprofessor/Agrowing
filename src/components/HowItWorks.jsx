import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-green-800 mb-4">How Agrowing Works</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless process that connects farmers, investors, buyers, and delivery partners
          </p>
        </div>
        
        {/* Workflow Image Section */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Workflow Process</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visualize the complete journey from farm to market through our integrated platform
            </p>
          </div>
          
          {/* Workflow Image Container - REPLACE THE IMAGE PATH BELOW */}
          <div className="relative bg-white p-4 rounded-xl border border-gray-200">
            <img 
              src="/src/assets/Agrowing_path.png" 
              alt="Agrowing Workflow Process Diagram"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          
        </div>

        {/* Key Features Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center">
            <div className="text-3xl mb-3">👨‍🌾</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Farmer First</h4>
            <p className="text-gray-600">Empowering farmers with direct market access and funding</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center">
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Investor Friendly</h4>
            <p className="text-gray-600">Transparent investment opportunities in agriculture</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 text-center">
            <div className="text-3xl mb-3">🛒</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Buyer Centric</h4>
            <p className="text-gray-600">Direct sourcing from verified farmers with quality assurance</p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-12 rounded-2xl shadow-2xl text-center">
          <h3 className="text-3xl font-semibold mb-6">Smart Management, Total Transparency 🧩</h3>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Agrowing's integrated platform ensures smooth functioning across all roles with verification, 
            escrow management, project monitoring, and 24/7 support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
              View More Detailed 
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;