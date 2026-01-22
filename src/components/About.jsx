import React from 'react';
import { 
  FaEye, 
  FaChartLine, 
  FaHandshake, 
  FaLeaf
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Grassland Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full py-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">About Us</h2>
          <p className="text-3xl text-emerald-100 font-light drop-shadow-md">
            Building the future of transparent agriculture through technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Left Column - Core Values with Glass Design */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 min-h-[500px] flex items-center">
              <div className="text-center text-white w-full">
                <h3 className="text-4xl font-bold mb-12 drop-shadow-lg">Our Core Values</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-emerald-500/20 p-4 rounded-full">
                      <FaEye className="w-8 h-8 text-emerald-300" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-bold drop-shadow-md mb-1">Transparency</h4>
                      <p className="text-emerald-100 text-lg">Complete visibility in all operations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-emerald-500/20 p-4 rounded-full">
                      <FaChartLine className="w-8 h-8 text-emerald-300" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-bold drop-shadow-md mb-1">Profitability for All</h4>
                      <p className="text-emerald-100 text-lg">Fair profit sharing among stakeholders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-emerald-500/20 p-4 rounded-full">
                      <FaHandshake className="w-8 h-8 text-emerald-300" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-bold drop-shadow-md mb-1">Direct Connectivity</h4>
                      <p className="text-emerald-100 text-lg">Direct farmer-to-buyer connections</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-emerald-500/20 p-4 rounded-full">
                      <FaLeaf className="w-8 h-8 text-emerald-300" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl font-bold drop-shadow-md mb-1">Sustainability</h4>
                      <p className="text-emerald-100 text-lg">Environmentally conscious practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <h3 className="text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Building the Future of Transparent Agriculture
            </h3>
            
            <div className="space-y-6 text-xl text-emerald-50 leading-relaxed">
              <p className="font-medium drop-shadow-md">
                Agrowing is an agri-investment and trading platform that bridges the gap between farmers, investors, and buyers. 
                We empower every stakeholder to participate in agriculture transparently — from funding crops to delivering produce directly to buyers.
              </p>
              
              <p className="drop-shadow-md">
                Agrowing ensures that buyers receive genuine farm produce 
                directly from the source — reducing middlemen, price manipulation, and wastage.
              </p>

              <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30 shadow-xl">
                <p className="text-2xl font-semibold leading-relaxed text-center text-white drop-shadow-lg">
                  "Our mission is simple: To make agriculture the most trusted and profitable sector for everyone farmers, investors, and consumers alike."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 