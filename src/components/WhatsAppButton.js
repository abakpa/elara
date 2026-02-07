import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '2349015156025';
  const message = encodeURIComponent("Hello EL'ARA! I would like to inquire about your laundry services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-fade-in border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-white text-sm" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">EL'ARA Support</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <HiX size={16} />
            </button>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 mb-3">
            <p className="text-sm text-gray-600">
              Hi there! How can we help you today? Click below to chat with us on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="group relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
