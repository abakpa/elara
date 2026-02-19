import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-elara-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-elara-600 to-elara-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Ready for Fresh, Clean Clothes?
              </h3>
              <p className="text-elara-100 mt-2">
                Schedule a pickup today and experience the EL'ARA difference.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-secondary whitespace-nowrap"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-elara-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">E</span>
              </div>
              <span className="font-display text-2xl font-bold tracking-wide">EL'ARA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium laundry and cleaning services that bring freshness and care to every garment.
              Your clothes deserve the best treatment.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com/elaraswashdrycleaningandindustrialcleaning' },
                // { icon: FaTwitter, href: '#' },
                { icon: FaInstagram, href: 'https://www.instagram.com/el_aras_wash?igsh=ZWI5NjJ4OXB3YW13' },
                { icon: FaTiktok, href: 'https://www.tiktok.com/@elaras.wash?_r=1&_t=ZS-93h3HnRA4CP' },
                // { icon: FaLinkedinIn, href: '##' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                   target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-elara-600 transition-colors"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Shop', path: '/shop' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Wash & Fold',
                'Dry Cleaning',
                'Iron & Press',
                'Stain Removal',
                'Curtain Cleaning',
                'Shoe Cleaning',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="text-elara-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Conner Shop 5, Karu, Opposite Redeemed Christian Mission Inc., Karu, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-elara-400 flex-shrink-0" />
                <a href="tel:+2349015156025" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +234 901 515 6025
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="text-elara-400 flex-shrink-0" />
                <a href="mailto:hello@elara.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hello@elara.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-elara-400 flex-shrink-0" />
                <a href="https://wa.me/2349015156025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} EL'ARA Laundry Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
