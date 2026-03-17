import React from 'react';
import { HiShoppingCart, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const Shop = () => {
  const machines = [
    {
      id: 1,
      name: 'Dry Cleaning Machine',
      description: 'Industrial dry cleaning machine with solvent recovery system for professional garment care.',
      capacity: '10kg - 15kg',
      price: 'Contact for Price',
      image: '/images/shop/machines/dry-cleaning-machine.png',
      features: ['Solvent Recovery', 'Digital Controls', 'Self-Cleaning', 'Energy Efficient'],
    },
    {
      id: 2,
      name: 'Wet & Dry Vacuum Cleaner',
      description: 'Stainless steel wet and dry vacuum cleaner for industrial cleaning applications.',
      capacity: '20L - 30L',
      price: 'Contact for Price',
      image: '/images/shop/machines/wet-dry-vacuum-cleaner.jpeg',
      features: ['Wet & Dry Function', 'Stainless Steel Tank', 'Powerful Suction', 'Easy Mobility'],
    },
    {
      id: 3,
      name: 'Knapsack Sprayer',
      description: 'Professional backpack sprayer for fumigation, pest control, and agricultural applications.',
      capacity: '16L - 20L',
      price: 'Contact for Price',
      image: '/images/shop/machines/knapsack-sprayer.jpeg',
      features: ['Adjustable Nozzle', 'Comfortable Straps', 'Pressure Control', 'Durable Tank'],
    },
    {
      id: 4,
      name: 'Gasoline Pressure Washer',
      description: 'Heavy-duty gasoline powered pressure washer with sprayer attachment for industrial cleaning.',
      capacity: 'Heavy Duty',
      price: 'Contact for Price',
      image: '/images/shop/machines/gasoline-pressure-washer.jpeg',
      features: ['High Pressure Output', 'Gasoline Powered', 'Multiple Nozzles', 'Portable Design'],
    },
    {
      id: 5,
      name: 'Electric Air Blower',
      description: 'Powerful electric air blower for drying, dust removal, and cleaning applications.',
      capacity: 'Professional Grade',
      price: 'Contact for Price',
      image: '/images/shop/machines/electric-air-blower.jpeg',
      features: ['Variable Speed', 'Lightweight', 'Low Noise', 'Dual Function'],
    },
    {
      id: 6,
      name: 'Thermal Fogging Machine',
      description: 'Professional thermal fogger for fumigation and pest control with dense fog output.',
      capacity: 'Commercial Grade',
      price: 'Contact for Price',
      image: '/images/shop/machines/thermal-fogging-machine.jpeg',
      features: ['Dense Fog Output', 'Large Coverage', 'Easy Operation', 'Fuel Efficient'],
    },
    {
      id: 7,
      name: 'Floor Scrubber Polisher',
      description: 'Industrial floor scrubber and polisher for commercial and industrial floor cleaning.',
      capacity: 'Heavy Duty',
      price: 'Contact for Price',
      image: '/images/shop/machines/floor-scrubber-polisher.jpeg',
      features: ['Dual Function', 'Adjustable Handle', 'Heavy Duty Motor', 'Multiple Pads'],
    },
    {
      id: 8,
      name: 'Single Disc Floor Scrubber',
      description: 'Professional single disc floor scrubbing machine with solution tank for deep cleaning.',
      capacity: '15L Tank',
      price: 'Contact for Price',
      image: '/images/shop/machines/single-disc-floor-scrubber.jpeg',
      features: ['Solution Tank', 'Adjustable Handle', 'Multiple Brush Options', 'Easy Maneuver'],
    },
    {
      id: 9,
      name: 'Industrial Floor Polisher',
      description: 'Heavy-duty industrial floor polisher for buffing and polishing hard floors.',
      capacity: 'Commercial Grade',
      price: 'Contact for Price',
      image: '/images/shop/machines/industrial-floor-polisher.jpeg',
      features: ['High RPM', 'Stainless Steel Body', 'Ergonomic Handle', 'Durable Pads'],
    },
    {
      id: 10,
      name: 'Walk-Behind Floor Scrubber',
      description: 'Lavor professional walk-behind automatic floor scrubber dryer for large areas.',
      capacity: 'Large Capacity',
      price: 'Contact for Price',
      image: '/images/shop/machines/walk-behind-floor-scrubber.jpeg',
      features: ['Auto Scrub & Dry', 'Large Tank', 'Battery Powered', 'Quiet Operation'],
    },
    {
      id: 11,
      name: 'Electric Pressure Washer',
      description: 'Powerful electric pressure washer for cleaning surfaces, vehicles, and equipment.',
      capacity: 'Heavy Duty',
      price: 'Contact for Price',
      image: '/images/shop/machines/electric-pressure-washer.jpeg',
      features: ['High Pressure', 'Multiple Nozzles', 'Compact Design', 'Easy Storage'],
    },
  ];

  const materials = [
    {
      id: 1,
      name: 'Cleaning Brush Kit',
      description: 'Complete cleaning brush set with drill attachments, microfiber cloths, and detailing brushes.',
      size: '25+ Pieces',
      price: 'Contact for Price',
      image: '/images/shop/materials/cleaning-brush-kit.jpeg',
    },
    {
      id: 2,
      name: 'Stain Remover Set',
      description: 'Professional stain remover collection including tannin, protein, ink, paint, wax, and dye transfer removers.',
      size: '6 x 500ml',
      price: 'Contact for Price',
      image: '/images/shop/materials/stain-remover-set.jpeg',
    },
    {
      id: 3,
      name: 'Steam Iron & Ironing Board',
      description: 'Quality steam iron with matching ironing board for professional pressing results.',
      size: 'Standard Size',
      price: 'Contact for Price',
      image: '/images/shop/materials/steam-iron-and-ironing-board.jpg',
    },
    {
      id: 4,
      name: 'Floor Cleaners & Disinfectants',
      description: 'Bulk floor cleaning solutions including pine cleaner, multi-surface cleaner, and disinfectants.',
      size: 'Various Sizes',
      price: 'Contact for Price',
      image: '/images/shop/materials/floor-cleaners.webp',
    },
    {
      id: 5,
      name: 'Washing Machine & Dryer Set',
      description: 'Top-loading washing machine and dryer set with ironing board for complete laundry setup.',
      size: 'Full Set',
      price: 'Contact for Price',
      image: '/images/shop/materials/washing-machine-dryer-set.jpg',
    },
    {
      id: 6,
      name: 'Cleaning Supplies Set',
      description: 'Complete cleaning supplies including buckets, mops, brushes, gloves, and detergents.',
      size: 'Complete Set',
      price: 'Contact for Price',
      image: '/images/shop/materials/cleaning-supplies-set.webp',
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
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/70 via-elara-900/60 to-elara-800/50"></div>
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
