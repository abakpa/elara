import React, { useState } from 'react';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiSparkles,
  HiArrowRight,
  HiCheck,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      details: ['Conner Shop 5, Karu', 'Opposite Redeemed Christian Mission Inc.', 'Karu, Abuja, Nigeria'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      details: ['+234 901 515 6025'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: HiMail,
      title: 'Email Us',
      details: ['hello@elara.com', 'support@elara.com'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: HiClock,
      title: 'Working Hours',
      details: ['Mon - Fri: 7AM - 9PM', 'Sat - Sun: 8AM - 6PM'],
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/95 to-elara-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HiSparkles className="text-elara-300" />
              <span className="text-white/90 text-sm font-medium">Get In Touch</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Let's Start
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elara-300 to-blue-300">
                A Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions? Need a quote? Want to schedule a pickup?
              We're here to help. Reach out to us through any of our channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Send a Message</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
                Get a Free Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <HiCheck className="text-green-500 text-xl flex-shrink-0" />
                  <p className="text-green-700 font-medium">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elara-500 focus:ring-2 focus:ring-elara-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elara-500 focus:ring-2 focus:ring-elara-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elara-500 focus:ring-2 focus:ring-elara-200 transition-all outline-none"
                      placeholder="+234 901 515 6025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elara-500 focus:ring-2 focus:ring-elara-200 transition-all outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="wash-fold">Wash & Fold</option>
                      <option value="dry-cleaning">Dry Cleaning</option>
                      <option value="iron-press">Iron & Press</option>
                      <option value="stain-removal">Stain Removal</option>
                      <option value="curtain-bedding">Curtain & Bedding</option>
                      <option value="shoe-cleaning">Shoe Cleaning</option>
                      <option value="upholstery">Upholstery Cleaning</option>
                      <option value="express">Express Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elara-500 focus:ring-2 focus:ring-elara-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your laundry needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto text-base"
                >
                  Send Message
                  <HiArrowRight className="ml-2" />
                </button>
              </form>

              {/* WhatsApp Alternative */}
              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Prefer WhatsApp?</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Chat with us directly on WhatsApp for quick responses and easy scheduling.
                    </p>
                    <a
                      href="https://wa.me/2349015156025?text=Hello%20EL'ARA!%20I%20would%20like%20to%20inquire%20about%20your%20laundry%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
                    >
                      Chat on WhatsApp <HiArrowRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl overflow-hidden h-80 mb-8">
                <iframe
                  title="EL'ARA Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31529.8!2d7.5!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a1b5e3d2c67%3A0x8a8b8c8d8e8f9091!2sKaru%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1645564756836!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-elara-50 rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                  Why Choose EL'ARA?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Free pickup and delivery within the city',
                    'Same-day and next-day service available',
                    'Eco-friendly cleaning products',
                    'Expert handling of all fabric types',
                    'Competitive and transparent pricing',
                    '100% satisfaction guarantee',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-elara-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiCheck className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6 flex items-center">
                  <HiClock className="text-elara-600 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '7:00 AM - 9:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Sunday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Holidays', hours: '9:00 AM - 3:00 PM' },
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-700 font-medium text-sm">{schedule.day}</span>
                      <span className="text-elara-600 font-semibold text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
