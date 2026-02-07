import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiSparkles,
  HiClock,
  HiShieldCheck,
  HiTruck,
  HiStar,
  HiArrowRight,
  HiCheck,
} from 'react-icons/hi';
import { FaTshirt, FaSocks, FaWind } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: HiSparkles,
      title: 'Premium Quality',
      description: 'We use eco-friendly detergents and advanced techniques for spotless results.',
    },
    {
      icon: HiClock,
      title: 'Quick Turnaround',
      description: 'Same-day and next-day services available. Your time matters to us.',
    },
    {
      icon: HiShieldCheck,
      title: 'Fabric Care',
      description: 'Expert handling of all fabric types from delicates to heavy-duty materials.',
    },
    {
      icon: HiTruck,
      title: 'Free Pickup & Delivery',
      description: 'Convenient doorstep service. We come to you and deliver fresh clothes back.',
    },
  ];

  const services = [
    {
      icon: FaTshirt,
      title: 'Wash & Fold',
      description: 'Professional washing with premium detergents, neatly folded and packaged.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HiSparkles,
      title: 'Dry Cleaning',
      description: 'Specialized cleaning for suits, dresses, and delicate garments.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaWind,
      title: 'Iron & Press',
      description: 'Crisp, wrinkle-free clothes with professional steam pressing.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FaSocks,
      title: 'Stain Removal',
      description: 'Advanced stain treatment for even the toughest marks and spots.',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Okafor',
      role: 'Regular Customer',
      text: "EL'ARA has transformed my weekly routine. The pickup and delivery service is a game-changer. My clothes have never looked better!",
      rating: 5,
    },
    {
      name: 'Michael Olumide',
      role: 'Business Professional',
      text: "I trust EL'ARA with all my suits and dress shirts. Their dry cleaning quality is exceptional, and the turnaround time is impressive.",
      rating: 5,
    },
    {
      name: 'Aisha Hassan',
      role: 'Busy Mom',
      text: "As a mother of three, EL'ARA is a lifesaver. They handle everything from school uniforms to delicates with absolute care.",
      rating: 5,
    },
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Garments Cleaned' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '9+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=80"
            alt="Fresh clean laundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/90 via-elara-900/80 to-elara-800/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-elara-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <HiSparkles className="text-gold-400" />
              <span className="text-white/90 text-sm font-medium">Premium Laundry & Cleaning Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Fresh Clothes,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elara-300 to-blue-300">
                Effortless Care
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Experience premium laundry services that treat your clothes with the care they deserve.
              From everyday wear to delicate fabrics, we handle it all with expertise and love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/services" className="btn-primary text-lg px-10 py-4">
                Our Services
                <HiArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-10 py-4">
                Get a Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-gold-400 w-5 h-5" />
                ))}
                <span className="text-white/80 text-sm ml-2">4.9/5 Rating</span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <p className="text-white/80 text-sm">Trusted by 10,000+ customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              The EL'ARA Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond cleaning clothes. We deliver an experience that saves you time,
              protects your garments, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-elara-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-elara-100 flex items-center justify-center mb-6 group-hover:bg-elara-600 transition-colors duration-300">
                  <feature.icon className="text-elara-600 text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive laundry and cleaning solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-elara-600 font-medium text-sm hover:text-elara-700 transition-colors"
                  >
                    Learn More <HiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting your laundry done has never been easier. Just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Schedule Pickup',
                description: 'Book a pickup online or via WhatsApp. Choose a time that works for you.',
                image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80',
              },
              {
                step: '02',
                title: 'We Clean & Care',
                description: 'Our experts clean your garments using premium products and techniques.',
                image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
              },
              {
                step: '03',
                title: 'Fresh Delivery',
                description: 'Receive your freshly cleaned clothes delivered right to your doorstep.',
                image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80',
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-elara-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1920&q=80"
            alt="Laundry background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-elara-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-elara-200 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="text-gold-400 w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-elara-400 to-elara-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-elara-600 via-elara-700 to-elara-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                  Affordable Pricing,
                  <br />Premium Results
                </h2>
                <p className="text-elara-100 max-w-xl mb-6">
                  We believe premium laundry care should be accessible to everyone.
                  Check out our competitive pricing plans.
                </p>
                <ul className="space-y-3 text-left">
                  {['No hidden fees', 'Transparent pricing', 'Bulk discounts available', 'Loyalty rewards program'].map(
                    (item, i) => (
                      <li key={i} className="flex items-center text-white/90">
                        <HiCheck className="text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl min-w-[280px]">
                <p className="text-sm font-semibold text-elara-600 mb-1">Starting from</p>

                <p className="text-4xl font-bold text-gray-900 mb-1">
                  &#8358;1,500<span className="text-lg text-gray-500 font-normal">/kg</span>
                </p>
                <p className="text-gray-500 text-sm mb-6">Wash &amp; Fold service</p>
                <Link
                  to="/contact"
                  className="block text-center bg-elara-600 text-white py-3 rounded-xl font-semibold hover:bg-elara-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
