import React, { useState } from 'react';
import { Home, TrendingUp, Users, MapPin, Phone, Mail, Globe, ChevronRight, Building, Smartphone, Wrench, IndianRupee, CheckCircle, XCircle, ArrowRight, Download, Presentation as PresentationChart, Key, DollarSign, Star, ChevronLeft, Play, Clock } from 'lucide-react';
import GrowthProjectionChart from './components/GrowthProjectionChart';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const propertyImages = [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="min-h-screen bg-[#fffaf3]">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#1f1f1f] leading-tight">
                India's Most Reliable,{' '}
                <span className="text-[#f4d35e]">Tech-Enabled</span>{' '}
                Rental Ownership Platform
              </h1>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#f4d35e]/20">
                <p className="text-xl text-[#4a4a4a] leading-relaxed">
                  We own the homes. You earn the returns. Tenants love the experience.
                  <br />
                  <span className="font-semibold text-[#1f1f1f]">
                    Welcome to TheSettleHub — where real estate meets tech, trust, and transparency.
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-[#f4d35e] hover:bg-[#f9cc3d] text-[#1f1f1f] font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                onClick={() => document.getElementById('proof-of-concept')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Building size={20} />
                Explore Properties
              </button>
              <button className="bg-white hover:bg-[#f4d35e]/10 text-[#1f1f1f] font-semibold px-8 py-4 rounded-xl border-2 border-[#f4d35e] transition-all duration-300 flex items-center gap-2">
                <Download size={20} />
                Investor Pitch (PDF)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center">
                <Key size={32} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold text-[#1f1f1f]">Happy Tenants</h3>
              <p className="text-[#4a4a4a] text-sm">Seamless booking and living experience</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center">
                <Smartphone size={32} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold text-[#1f1f1f]">Tech Platform</h3>
              <p className="text-[#4a4a4a] text-sm">Fully managed digital ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Infographic */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">
              🛑 Brokers. 🧱 Broken Rentals. 🏃‍♂️ No Accountability.
            </h2>
            <p className="text-2xl font-semibold text-[#f4d35e]">✅ TheSettleHub = The Full-Stack Fix</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-8">The Problems</h3>
              {[
                { icon: '🎭', title: 'Fake Listings', desc: 'Properties that don\'t exist or misleading information' },
                { icon: '🔄', title: 'Long Vacancies', desc: 'Properties sitting empty for months' },
                { icon: '🧹', title: 'Poor Maintenance', desc: 'No accountability for property upkeep' },
                { icon: '💸', title: 'Unstable Yields', desc: 'Inconsistent rental income' },
                { icon: '🏃‍♂️', title: 'No Support System', desc: 'Tenants and owners left hanging' }
              ].map((problem, index) => (
                <div key={index} className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 flex items-start gap-4">
                  <div className="text-2xl">{problem.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1f1f1f] mb-2">{problem.title}</h4>
                    <p className="text-[#4a4a4a]">{problem.desc}</p>
                  </div>
                  <XCircle className="text-red-500 flex-shrink-0" size={24} />
                </div>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-8">Our Solutions</h3>
              {[
                { icon: '📲', title: 'Fully Managed Platform', desc: 'End-to-end digital management system' },
                { icon: '🏠', title: 'Verified, Owned Properties', desc: 'We own what we rent - complete transparency' },
                { icon: '📈', title: '6% Rental Yields', desc: 'Consistent, guaranteed returns' },
                { icon: '👷', title: 'Rapid Response for Tenants', desc: '24/7 support and maintenance' },
                { icon: '📉', title: 'Zero Marketing Burn', desc: 'Direct platform eliminates middleman costs' }
              ].map((solution, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 flex items-start gap-4">
                  <div className="text-2xl">{solution.icon}</div>
                  <div>
                    <h4 className="font-semibold text-[#1f1f1f] mb-2">{solution.title}</h4>
                    <p className="text-[#4a4a4a]">{solution.desc}</p>
                  </div>
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Model at a Glance */}
      <section className="py-20 px-6 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1f1f1f] mb-8">Our Model at a Glance</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home size={32} className="text-[#1f1f1f]" />
                </div>
                <p className="font-semibold text-[#1f1f1f]">Buy</p>
              </div>
              <ArrowRight className="text-[#f4d35e]" size={32} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wrench size={32} className="text-[#1f1f1f]" />
                </div>
                <p className="font-semibold text-[#1f1f1f]">Customize</p>
              </div>
              <ArrowRight className="text-[#f4d35e]" size={32} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <IndianRupee size={32} className="text-[#1f1f1f]" />
                </div>
                <p className="font-semibold text-[#1f1f1f]">Rent</p>
              </div>
              <ArrowRight className="text-[#f4d35e]" size={32} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={32} className="text-[#1f1f1f]" />
                </div>
                <p className="font-semibold text-[#1f1f1f]">Manage</p>
              </div>
              <ArrowRight className="text-[#f4d35e]" size={32} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp size={32} className="text-[#1f1f1f]" />
                </div>
                <p className="font-semibold text-[#1f1f1f]">Earn</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f4d35e]/20 p-6 rounded-xl">
            <p className="text-lg text-[#1f1f1f] leading-relaxed">
              We buy homes in prime urban clusters, furnish them for PG or rental, and list them on our own platform — generating rental profits from Day 1.
            </p>
          </div>
        </div>
      </section>

      {/* Live Portfolio Section */}
      <section id="proof-of-concept" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">🏠 Our Proof of Concept is Already Live</h2>
            <p className="text-xl text-[#4a4a4a]">📍 Ejipura, Bangalore</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={propertyImages[currentImageIndex]}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ChevronLeft size={24} className="text-[#1f1f1f]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ChevronRight size={24} className="text-[#1f1f1f]" />
                </button>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-[#f4d35e]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#f4d35e]/10 p-6 rounded-xl border border-[#f4d35e]/30">
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">House 1 (2020)</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#4a4a4a]">Bought For</p>
                    <p className="font-semibold text-[#1f1f1f] text-lg">₹1.2 Cr</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Now Worth</p>
                    <p className="font-semibold text-green-600 text-lg">₹1.6 Cr</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Rent/Month</p>
                    <p className="font-semibold text-[#1f1f1f] text-lg">₹73K</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Yield</p>
                    <p className="font-semibold text-[#f4d35e] text-lg">7.3%</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  Leased
                </div>
              </div>
              
              <div className="bg-[#f4d35e]/10 p-6 rounded-xl border border-[#f4d35e]/30">
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-4">House 2 (2020)</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#4a4a4a]">Bought For</p>
                    <p className="font-semibold text-[#1f1f1f] text-lg">₹1.0 Cr</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Now Worth</p>
                    <p className="font-semibold text-green-600 text-lg">₹1.3 Cr</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Rent/Month</p>
                    <p className="font-semibold text-[#1f1f1f] text-lg">₹65K</p>
                  </div>
                  <div>
                    <p className="text-[#4a4a4a]">Yield</p>
                    <p className="font-semibold text-[#f4d35e] text-lg">7.8%</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle size={16} />
                  Leased
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Properties Pipeline */}
      <section className="py-20 px-6 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">🔍 Upcoming Properties Pipeline</h2>
            <p className="text-xl text-[#4a4a4a]">Prime locations, handpicked for maximum returns</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { location: 'Koramangala', yield: '6.8%', status: 'Negotiation In Progress', price: '₹2.1 Cr' },
              { location: 'HSR Layout', yield: '7.2%', status: 'Available Soon', price: '₹1.8 Cr' },
              { location: 'Indiranagar', yield: '6.5%', status: 'Negotiation In Progress', price: '₹2.5 Cr' },
              { location: 'Whitefield', yield: '7.5%', status: 'Available Soon', price: '₹1.6 Cr' },
              { location: 'Electronic City', yield: '8.1%', status: 'Available Soon', price: '₹1.4 Cr' }
            ].map((property, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-[#f4d35e]/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-[#f4d35e]" />
                    <h3 className="font-bold text-[#1f1f1f]">{property.location}</h3>
                  </div>
                  <div className="bg-[#f4d35e] text-[#1f1f1f] px-3 py-1 rounded-full text-sm font-bold">
                    {property.yield}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#4a4a4a]">Expected Price</span>
                    <span className="font-semibold text-[#1f1f1f]">{property.price}</span>
                  </div>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    property.status === 'Available Soon' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {property.status === 'Available Soon' ? (
                      <CheckCircle size={16} />
                    ) : (
                      <Clock size={16} />
                    )}
                    {property.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Walkthrough */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">📱 Platform Walkthrough: The Settle Hub</h2>
            <p className="text-xl text-[#4a4a4a]">Your complete rental ecosystem in one platform</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-[#f4d35e]/10 p-6 rounded-xl border border-[#f4d35e]/30">
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Settle Hub PG</h3>
                <ul className="space-y-3">
                  {[
                    'Room discovery with virtual tours',
                    'Instant booking & verification',
                    'Raise complaints digitally',
                    'Digital rent payment system',
                    'Community features & events'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#f4d35e]/10 p-6 rounded-xl border border-[#f4d35e]/30">
                <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Settle Hub Full Home</h3>
                <ul className="space-y-3">
                  {[
                    'Complete home listings',
                    'Family-friendly amenities',
                    'Maintenance request system',
                    'Secure payment gateway',
                    'Tenant community platform'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-96 bg-gradient-to-br from-[#f4d35e] to-[#f9cc3d] rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-[#1f1f1f]">Settle Hub</h4>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="bg-[#f4d35e]/20 p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Home size={20} className="text-[#f4d35e]" />
                          <span className="font-semibold text-[#1f1f1f] text-sm">Room Search</span>
                        </div>
                        <div className="h-16 bg-gray-200 rounded-lg"></div>
                      </div>
                      
                      <div className="bg-[#f4d35e]/20 p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <DollarSign size={20} className="text-[#f4d35e]" />
                          <span className="font-semibold text-[#1f1f1f] text-sm">Quick Payment</span>
                        </div>
                        <div className="h-12 bg-gray-200 rounded-lg"></div>
                      </div>
                      
                      <div className="bg-[#f4d35e]/20 p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Wrench size={20} className="text-[#f4d35e]" />
                          <span className="font-semibold text-[#1f1f1f] text-sm">Maintenance</span>
                        </div>
                        <div className="h-8 bg-gray-200 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Proposition */}
      <section className="py-20 px-6 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">📈 Investor Proposition</h2>
            <p className="text-2xl font-semibold text-[#f4d35e]">Investment ask: ₹10 Cr</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <GrowthProjectionChart />
          </div>
        </div>
      </section>

      {/* How You Can Join */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">🔓 How You Can Join</h2>
            <p className="text-xl text-[#4a4a4a]">Multiple ways to be part of the TheSettleHub ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f4d35e]/10 p-8 rounded-2xl border border-[#f4d35e]/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-6">
                <Key size={32} className="text-[#1f1f1f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Tenants</h3>
              <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                🔑 Book PGs and full homes in minutes. Experience hassle-free living with our tech-enabled platform.
              </p>
              <button className="bg-[#f4d35e] hover:bg-[#f9cc3d] text-[#1f1f1f] font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                I Want In <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="bg-[#f4d35e]/10 p-8 rounded-2xl border border-[#f4d35e]/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-[#1f1f1f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Investors</h3>
              <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                💸 Get 5–7% yield + capital appreciation. Invest in the future of rental real estate.
              </p>
              <button className="bg-[#f4d35e] hover:bg-[#f9cc3d] text-[#1f1f1f] font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                I Want In <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="bg-[#f4d35e]/10 p-8 rounded-2xl border border-[#f4d35e]/30 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-6">
                <Home size={32} className="text-[#1f1f1f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1f1f1f] mb-4">Property Sellers</h3>
              <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                🏘 Sell your rental-ready home to TheSettleHub. Get fair pricing and quick, transparent transactions.
              </p>
              <button className="bg-[#f4d35e] hover:bg-[#f9cc3d] text-[#1f1f1f] font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                I Want In <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">👨‍👩‍👧‍👦 Meet the Team</h2>
            <p className="text-xl text-[#4a4a4a]">The visionaries behind The Settle Hub</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Aditya Tathagath', role: 'CEO & Co-founder', image: '../media/aditya_photo.jpg' },
              { name: 'Ajay Patel', role: 'CTO & Co-founder', image: '/media/ajay_photo.jpg' },
              { name: 'Ankit Kumar', role: 'COO & Co-founder', image: '/media/ankit_photo.jpg' },
              { name: 'Tanuj Bhatt', role: 'CFO & Co-founder', image: '/media/tanuj_photo.jpg' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#f4d35e] rounded-full flex items-center justify-center">
                    <Play size={16} className="text-[#1f1f1f]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1f1f1f] mb-2">{member.name}</h3>
                <p className="text-[#4a4a4a] mb-4">{member.role}</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-[#f4d35e] fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-20 px-6 bg-[#1f1f1f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">📬 Let's Connect</h2>
            <p className="text-xl text-gray-300">Ready to revolutionize rental real estate together?</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">📍 Ejipura, Bangalore</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">📧 foundersoffice@settlehub.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold mb-2">Websites</h3>
              <p className="text-gray-300">🌐 a3tventures.com</p>
              <p className="text-gray-300">🌐 thesettlehub.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#f4d35e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-[#1f1f1f]" />
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-gray-300">📱 Follow our journey</p>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-8">
            <p className="text-gray-400">© 2024 A3T Ventures. All rights reserved. Built with ❤️ for the future of rental real estate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;