import React from 'react';
import { HiShoppingCart, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Shop = () => {
  const machines = [
    {
      id: 1,
      name: 'Industrial Washing Machine',
      description: 'Heavy-duty commercial washing machine perfect for laundry businesses. High capacity, energy efficient.',
      capacity: '15kg - 25kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/Screenshot 2026-02-25 at 08.39.51.png',
      features: ['Energy Efficient', 'Multiple Wash Programs', 'Stainless Steel Drum', 'Low Noise Operation'],
    },
    {
      id: 2,
      name: 'Commercial Dryer',
      description: 'Professional-grade dryer with fast drying cycles and gentle fabric care technology.',
      capacity: '15kg - 20kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.17.25 (1).jpeg',
      features: ['Quick Dry Technology', 'Multiple Heat Settings', 'Large Capacity', 'Auto Sensor'],
    },
    {
      id: 3,
      name: 'Steam Press Iron',
      description: 'Industrial steam press for crisp, professional finishing on all types of garments.',
      capacity: 'Professional Grade',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.17.25 (2).jpeg',
      features: ['High Steam Output', 'Temperature Control', 'Non-Stick Plates', 'Safety Features'],
    },
    {
      id: 4,
      name: 'Dry Cleaning Machine',
      description: 'Eco-friendly dry cleaning system for delicate fabrics and professional garment care.',
      capacity: '10kg - 15kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.17.25 (3).jpeg',
      features: ['Eco-Friendly Solvent', 'Gentle on Fabrics', 'Self-Cleaning', 'Digital Controls'],
    },
    {
      id: 5,
      name: 'Commercial Ironing System',
      description: 'Professional ironing system with steam generator for high-volume pressing needs.',
      capacity: 'Heavy Duty',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.17.25.jpeg',
      features: ['Steam Generator', 'Adjustable Height', 'Anti-Shine Plates', 'Auto Shut-Off'],
    },
    {
      id: 6,
      name: 'Washer-Extractor Machine',
      description: 'High-speed extraction washing machine for maximum water removal and faster drying.',
      capacity: '20kg - 30kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (1).jpeg',
      features: ['High-Speed Extract', 'Programmable Controls', 'Water Recycling', 'Heavy Duty Motor'],
    },
    {
      id: 7,
      name: 'Industrial Washing Machine',
      description: 'Heavy-duty commercial washing machine perfect for laundry businesses. High capacity, energy efficient.',
      capacity: '15kg - 25kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (4).jpeg',
      features: ['Energy Efficient', 'Multiple Wash Programs', 'Stainless Steel Drum', 'Low Noise Operation'],
    },
    {
      id: 8,
      name: 'Commercial Dryer',
      description: 'Professional-grade dryer with fast drying cycles and gentle fabric care technology.',
      capacity: '15kg - 20kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (6).jpeg',
      features: ['Quick Dry Technology', 'Multiple Heat Settings', 'Large Capacity', 'Auto Sensor'],
    },
    {
      id: 9,
      name: 'Steam Press Iron',
      description: 'Industrial steam press for crisp, professional finishing on all types of garments.',
      capacity: 'Professional Grade',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (5).jpeg',
      features: ['High Steam Output', 'Temperature Control', 'Non-Stick Plates', 'Safety Features'],
    },
    {
      id: 10,
      name: 'Dry Cleaning Machine',
      description: 'Eco-friendly dry cleaning system for delicate fabrics and professional garment care.',
      capacity: '10kg - 15kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (7).jpeg',
      features: ['Eco-Friendly Solvent', 'Gentle on Fabrics', 'Self-Cleaning', 'Digital Controls'],
    },
    {
      id: 11,
      name: 'Commercial Ironing System',
      description: 'Professional ironing system with steam generator for high-volume pressing needs.',
      capacity: 'Heavy Duty',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46.jpeg',
      features: ['Steam Generator', 'Adjustable Height', 'Anti-Shine Plates', 'Auto Shut-Off'],
    },
    {
      id: 12,
      name: 'Washer-Extractor Machine',
      description: 'High-speed extraction washing machine for maximum water removal and faster drying.',
      capacity: '20kg - 30kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/WhatsApp Image 2026-02-23 at 23.31.46 (1).jpeg',
      features: ['High-Speed Extract', 'Programmable Controls', 'Water Recycling', 'Heavy Duty Motor'],
    },
  ];

  const materials = [
    {
      id: 1,
      name: 'Premium Laundry Detergent',
      description: 'Professional-grade detergent for tough stains and fresh scent.',
      size: '20L / 25kg',
      price: 'Contact for Price',
      image: '/images/shop/materials/WhatsApp Image 2026-02-19 at 10.01.49.jpeg',
    },
    {
      id: 2,
      name: 'Fabric Softener',
      description: 'Concentrated fabric softener for soft, fresh-smelling clothes.',
      size: '20L',
      price: 'Contact for Price',
      image: '/images/shop/materials/WhatsApp Image 2026-02-19 at 09.50.06.jpeg',
    },
    {
      id: 3,
      name: 'Stain Remover',
      description: 'Industrial-strength stain remover for all fabric types.',
      size: '5L / 10L',
      price: 'Contact for Price',
      image: '/images/shop/materials/essential-laundry-room-tools-1900256-04-320cb2c83e26410d8af537b57f8203e3.jpg',
    },
    {
      id: 4,
      name: 'Dry Cleaning Solvent',
      description: 'Eco-friendly solvent for professional dry cleaning.',
      size: '20L',
      price: 'Contact for Price',
      image: '/images/shop/materials/home+and+laundry.webp',
    },
    {
      id: 5,
      name: 'Laundry Bags',
      description: 'Durable mesh laundry bags in various sizes.',
      size: 'Various Sizes',
      price: 'Contact for Price',
      image: '/images/shop/materials/essential-laundry-room-tools-1900256-05-6844edcf9e324e8da14da7aef588531a.jpg',
    },
    {
      id: 6,
      name: 'Garment Covers',
      description: 'Professional garment covers for finished items.',
      size: 'Pack of 100',
      price: 'Contact for Price',
      image: '/images/shop/materials/vector-cartoon-set-cleaning-laundry-260nw-2298869685.webp',
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
            src="/images/shop/Equipment and Facilities.jpg"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{machine.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{machine.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-elara-600 font-semibold text-sm">{machine.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I am interested in the ${machine.name}. Please provide more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-medium text-white bg-green-500 px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="mr-1" />
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{material.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-elara-600 font-semibold text-sm">{material.price}</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I am interested in ${material.name}. Please provide more details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-medium text-white bg-green-500 px-3 py-1.5 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="mr-1" />
                      Enquire
                    </a>
                  </div>
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
