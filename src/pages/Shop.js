import React from 'react';
import { HiShoppingCart, HiPhone, HiCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Shop = () => {
  const machines = [
    {
      id: 1,
      name: 'Industrial Washing Machine',
      description: 'Heavy-duty commercial washing machine perfect for laundry businesses. High capacity, energy efficient.',
      capacity: '15kg - 25kg',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
      features: ['Energy Efficient', 'Multiple Wash Programs', 'Stainless Steel Drum', 'Low Noise Operation'],
    },
    {
      id: 2,
      name: 'Commercial Dryer',
      description: 'Professional-grade dryer with fast drying cycles and gentle fabric care technology.',
      capacity: '15kg - 20kg',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
      features: ['Quick Dry Technology', 'Multiple Heat Settings', 'Large Capacity', 'Auto Sensor'],
    },
    {
      id: 3,
      name: 'Steam Press Iron',
      description: 'Industrial steam press for crisp, professional finishing on all types of garments.',
      capacity: 'Professional Grade',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      features: ['High Steam Output', 'Temperature Control', 'Non-Stick Plates', 'Safety Features'],
    },
    {
      id: 4,
      name: 'Dry Cleaning Machine',
      description: 'Eco-friendly dry cleaning system for delicate fabrics and professional garment care.',
      capacity: '10kg - 15kg',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80',
      features: ['Eco-Friendly Solvent', 'Gentle on Fabrics', 'Self-Cleaning', 'Digital Controls'],
    },
  ];

  const materials = [
    {
      id: 1,
      name: 'Premium Laundry Detergent',
      description: 'Professional-grade detergent for tough stains and fresh scent.',
      size: '20L / 25kg',
      price: 'Contact for Price',
    },
    {
      id: 2,
      name: 'Fabric Softener',
      description: 'Concentrated fabric softener for soft, fresh-smelling clothes.',
      size: '20L',
      price: 'Contact for Price',
    },
    {
      id: 3,
      name: 'Stain Remover',
      description: 'Industrial-strength stain remover for all fabric types.',
      size: '5L / 10L',
      price: 'Contact for Price',
    },
    {
      id: 4,
      name: 'Dry Cleaning Solvent',
      description: 'Eco-friendly solvent for professional dry cleaning.',
      size: '20L',
      price: 'Contact for Price',
    },
    {
      id: 5,
      name: 'Laundry Bags',
      description: 'Durable mesh laundry bags in various sizes.',
      size: 'Various Sizes',
      price: 'Contact for Price',
    },
    {
      id: 6,
      name: 'Garment Covers',
      description: 'Professional garment covers for finished items.',
      size: 'Pack of 100',
      price: 'Contact for Price',
    },
  ];

  const whatsappNumber = '2349015156025';
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your laundry machines and materials. Please provide more information.');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&q=80"
            alt="Laundry Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/95 via-elara-900/90 to-elara-800/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <HiShoppingCart className="inline mr-2" />
              Laundry Equipment & Supplies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Quality Laundry
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elara-300 to-blue-300">
                Machines & Materials
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Start or upgrade your laundry business with our premium selection of industrial machines
              and professional-grade cleaning materials.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              <FaWhatsapp className="mr-2" />
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Equipment</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Laundry Machines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industrial-grade machines built for reliability, efficiency, and professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-elara-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {machine.capacity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{machine.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{machine.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {machine.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <HiCheck className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-elara-600 font-semibold">{machine.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I am interested in the ${machine.name}. Please provide more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-white bg-green-500 px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="mr-2" />
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Supplies</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Laundry Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional-grade cleaning supplies and materials for exceptional laundry results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <div
                key={material.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-elara-100 flex items-center justify-center mb-4">
                  <HiShoppingCart className="text-elara-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{material.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{material.size}</span>
                  <span className="text-elara-600 font-medium text-sm">{material.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp className="mr-2" />
              Order Materials
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-elara-600 via-elara-700 to-elara-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Ready to Start Your Laundry Business?
              </h2>
              <p className="text-elara-100 mb-8">
                Contact us today for bulk orders, special pricing, and expert advice on setting up your laundry business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+2349015156025"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-elara-700 transition-all duration-300"
                >
                  <HiPhone className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
