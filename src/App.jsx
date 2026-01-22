import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Farmers from './components/Farmers';
import Investors from './components/Investors';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Buyers from './components/Buyers';
import DeliveryPartners from './components/DeliveryPartners';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Farmers />
      <Investors />
      <Buyers />
      <DeliveryPartners />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default App;