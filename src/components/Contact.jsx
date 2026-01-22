import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaUser, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setMessage("");

  try {
    const response = await axios.post("http://localhost:5000/api/contact", formData);
    
    if (response.data.success) {
      setMessage("✅ Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    setMessage("❌ Failed to send");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Ready to Grow Together? Let's Cultivate Success 🌱
          </p>
          <p className="text-lg text-green-200 mt-4 max-w-2xl mx-auto">
            Whether you're a farmer, investor, buyer, or delivery partner — we're here to help you thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FaMapMarkerAlt className="w-5 h-5" />,
                    title: "Our Location",
                    content: "Agrowing Private Limited\nK.R. COLLEGE OF ARTS & SCIENCE, Innovation Hub. ",
                    bg: "from-green-500 to-emerald-600",
                    delay: "100"
                  },
                  {
                    icon: <FaEnvelope className="w-5 h-5" />,
                    title: "Email Us",
                    content: "inbox.agrowing@gmail.com",
                    href: "inbox.agrowing@gmail.com",
                    bg: "from-blue-500 to-cyan-600",
                    delay: "200"
                  },
                  {
                    icon: <FaPhone className="w-5 h-5" />,
                    title: "Call Us",
                    content: "+91-93458 96973",
                    href: "tel:+919345896973",
                    bg: "from-purple-500 to-indigo-600",
                    delay: "300"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-white/20"
                  >
                    <div className={`bg-gradient-to-r ${item.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-green-300 font-semibold text-sm mb-1">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-white font-medium text-base hover:text-green-300 transition-colors duration-300 whitespace-pre-line block"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-base whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-green-200 text-center">Working Hours</h4>
                <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 p-4 rounded-xl text-center border border-green-500/20">
                  <p className="text-white font-medium">🕓 Monday - Saturday</p>
                  <p className="text-green-200 text-sm">9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold mb-4 text-green-200">Follow Our Journey</h4>
                <div className="flex justify-center space-x-3">
                  {[
                    { icon: <FaFacebook />, bg: "from-blue-500 to-blue-600", label: "Facebook" },
                    { icon: <FaLinkedin />, bg: "from-blue-700 to-blue-800", label: "LinkedIn" },
                    { icon: <FaTwitter />, bg: "from-sky-400 to-sky-500", label: "Twitter" },
                    { icon: <FaInstagram />, bg: "from-orange-500 to-red-600", label: "Instagram" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`bg-gradient-to-r ${social.bg} p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg group relative`}
                      aria-label={social.label}
                    >
                      {social.icon}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl h-full">
              <div className="text-center mb-5">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FaPaperPlane className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Send us a Message</h3>
             
              </div>
              
              {message && (
                <div className={`p-4 rounded-xl mb-2 backdrop-blur-sm border ${
                  message.includes("✅") 
                    ? "bg-green-600/80 border-green-400/50" 
                    : "bg-red-600/80 border-red-400/50"
                } text-white text-center`}>
                  {message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-green-200 text-base mb-3 font-semibold flex items-center">
                    <FaUser className="w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/15 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 placeholder-green-200/70 text-lg shadow-inner"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="text-green-200 text-base mb-3 font-semibold flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/15 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 placeholder-green-200/70 text-lg shadow-inner"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-green-200 text-base mb-3 font-semibold">
                    Your Message *
                  </label>
                  <textarea 
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/15 border border-white/30 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300 resize-none placeholder-green-200/70 text-lg shadow-inner"
                    placeholder="Tell us about your inquiry, project, or how we can help you..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 group text-lg flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-green-700/50 text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-green-200 mb-2">🌾 AGROWING</h3>
              <p className="text-green-300 text-lg">Connecting Farms, Funds, and Futures</p>
            </div>
            
            <div className="text-green-300">
              <p className="text-base mb-3">© 2025 Agrowing Private Limited. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-white transition duration-300 text-base hover:underline">Terms of Service</a>
                <a href="#" className="hover:text-white transition duration-300 text-base hover:underline">Privacy Policy</a>
                <a href="#" className="hover:text-white transition duration-300 text-base hover:underline">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;