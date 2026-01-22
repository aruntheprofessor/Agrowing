import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 text-center leading-tight">
          AGROWING
        </h1>
        
        {/* Subheading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 text-center">
          Connecting Farms, Funds, and Futures
        </h2>
        
        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 text-center px-4">
          Agrowing is a digital ecosystem that unites farmers, investors, and buyers on one transparent platform — 
          enabling smarter cultivation, fair funding, and direct trading with logistics support.
        </p>
        
        {/* Compelling Message Section */}
        <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-white/30 max-w-4xl mx-auto mb-6 md:mb-8 w-full">
          <div >
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 text-center">
              🌟 Transforming Agriculture Through Technology
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-white/100 leading-relaxed">
              <p>
                <span className="font-semibold text-green-300 ">For Farmers:</span> Break free from traditional constraints. 
                Access funding, reach premium markets, and earn what you truly deserve.
              </p>
              <p>
                <span className="font-semibold text-blue-300">For Investors:</span> Discover agriculture's untapped potential. 
                Earn sustainable returns while supporting real farmers.
              </p>
              <p>
                <span className="font-semibold text-orange-300">For Everyone:</span> Join the revolution that's making agriculture 
                profitable, sustainable, and accessible to all.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Message */}
        <div className="text-center w-full max-w-2xl">
          <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
            Ready to Be Part of the Agricultural Revolution?
          </h4>
          <p className="text-sm md:text-base text-white/80 mx-auto mb-3 md:mb-4 px-4">
            Join thousands of farmers, investors, and buyers transforming their futures with Agrowing.
          </p>
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-3 md:p-4 rounded-xl border border-white/20 mx-4">
            <p className="text-white font-semibold text-sm md:text-base">
              🚀 Start Your Journey Today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;