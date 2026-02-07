import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiSparkles,
  HiArrowRight,
  HiCheck,
  HiStar,
} from 'react-icons/hi';
import {
  FaTshirt,
  FaSocks,
  FaWind,
  FaShoePrints,
  FaCouch,
  FaBed,
} from 'react-icons/fa';
import { GiWashingMachine } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: GiWashingMachine,
      title: 'Wash & Fold',
      description:
        'Our signature service. We carefully sort, wash, dry, and fold your clothes using premium eco-friendly detergents. Each load is handled individually to prevent mixing.',
      features: ['Color sorting', 'Premium detergents', 'Fabric softener', 'Neatly folded & packaged'],
      price: 'From \u20A61,500/kg',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    },
    {
      icon: FaTshirt,
      title: 'Dry Cleaning',
      description:
        'Professional dry cleaning for your finest garments. We specialize in suits, blazers, dresses, silk, and other delicate fabrics that require expert care.',
      features: ['Suit & blazer care', 'Silk & satin safe', 'Stain pre-treatment', 'Protective packaging'],
      price: 'From \u20A65,000/item',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=80',
    },
    {
      icon: FaWind,
      title: 'Iron & Press',
      description:
        'Get perfectly crisp, wrinkle-free clothes with our professional steam pressing service. Ideal for shirts, trousers, and professional attire.',
      features: ['Steam pressing', 'Crease-free finish', 'Hanger or folded', 'Business attire experts'],
      price: 'From \u20A62,500/item',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80',
    },
    {
      icon: FaSocks,
      title: 'Stain Removal',
      description:
        'Stubborn stains don\'t stand a chance. Our advanced stain removal techniques tackle wine, ink, grease, coffee, and more without damaging fabric.',
      features: ['Wine & ink removal', 'Grease treatment', 'Color-safe process', 'Fabric preservation'],
      price: 'From \u20A63,500/item',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&q=80',
    },
    {
      icon: FaBed,
      title: 'Curtain & Bedding',
      description:
        'Refresh your home with professionally cleaned curtains, bed sheets, duvets, and comforters. We handle large items with the same care as your finest clothes.',
      features: ['Curtain cleaning', 'Duvet & comforter', 'Bed sheet service', 'Pillow cleaning'],
      price: 'From \u20A68,000/item',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    },
    {
      icon: FaShoePrints,
      title: 'Shoe Cleaning',
      description:
        'Give your footwear a new life. From sneakers to leather shoes, our shoe cleaning service restores your favorite pairs to their former glory.',
      features: ['Sneaker cleaning', 'Leather restoration', 'Deodorizing', 'Sole whitening'],
      price: 'From \u20A66,500/pair',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    },
    {
      icon: FaCouch,
      title: 'Upholstery Cleaning',
      description:
        'Revive your furniture with our deep upholstery cleaning service. We remove dirt, stains, and allergens from sofas, chairs, and cushions.',
      features: ['Sofa deep clean', 'Allergen removal', 'Fabric protection', 'Deodorizing treatment'],
      price: 'From \u20A640,000',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    },
    {
      icon: FaWind,
      title: 'Express Service',
      description:
        'Need it fast? Our express service guarantees same-day turnaround for wash & fold, pressing, and select dry cleaning items.',
      features: ['Same-day service', 'Priority handling', 'All services eligible', 'Rush delivery'],
      price: '+50% express fee',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=600&q=80',
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '\u20A625,000',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 7 kg/month',
        'Wash & Fold service',
        'Free pickup & delivery',
        '48-hour turnaround',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '\u20A650,000',
      period: '/month',
      description: 'Best for families',
      features: [
        'Up to 18 kg/month',
        'All cleaning services',
        'Free pickup & delivery',
        '24-hour turnaround',
        'Stain treatment included',
        'Priority scheduling',
      ],
      popular: true,
    },
    {
      name: 'Business',
      price: '\u20A685,000',
      period: '/month',
      description: 'For businesses & teams',
      features: [
        'Unlimited laundry',
        'All cleaning services',
        'Free pickup & delivery',
        'Same-day turnaround',
        'Dedicated account manager',
        'Volume discounts',
      ],
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1920&q=80"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/95 to-elara-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HiSparkles className="text-elara-300" />
              <span className="text-white/90 text-sm font-medium">What We Do</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Our Professional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elara-300 to-blue-300">
                Cleaning Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From everyday laundry to specialized cleaning, we offer a comprehensive range of services
              designed to keep your garments fresh, clean, and looking their best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Complete Laundry & Cleaning Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whatever your cleaning needs, we have the expertise and equipment to deliver outstanding results.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-semibold rounded-full shadow-lg`}>
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <HiCheck className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your needs. All plans include free pickup and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-elara-600 to-elara-800 text-white shadow-2xl scale-105'
                    : 'bg-white shadow-sm hover:shadow-lg'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-elara-900 text-xs font-bold px-4 py-1 rounded-full flex items-center space-x-1">
                    <HiStar />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-elara-100' : 'text-gray-500'} mt-1`}>
                  {plan.description}
                </p>

                <div className="mt-6 mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`${plan.popular ? 'text-elara-200' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <HiCheck className={`flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-elara-700 hover:bg-elara-50'
                      : 'bg-elara-600 text-white hover:bg-elara-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does pickup and delivery work?',
                a: 'Simply schedule a pickup through our website, phone, or WhatsApp. Our driver will collect your laundry at your chosen time and deliver it back fresh and clean.',
              },
              {
                q: 'What is your turnaround time?',
                a: 'Standard turnaround is 48 hours. Premium plan members enjoy 24-hour turnaround, and we also offer same-day express service for an additional fee.',
              },
              {
                q: 'Do you handle delicate fabrics?',
                a: 'Absolutely! Our team is trained to handle all types of fabrics including silk, cashmere, linen, and more. Each garment is treated according to its specific care requirements.',
              },
              {
                q: 'Are your cleaning products eco-friendly?',
                a: 'Yes! We use biodegradable, eco-friendly detergents and cleaning solutions that are gentle on your clothes and the environment.',
              },
              {
                q: 'What if my clothes are damaged?',
                a: 'We take great care with every garment. However, in the unlikely event of damage, we have a comprehensive insurance policy and will compensate you fully.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-elara-600 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-elara-600 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elara-600 via-elara-700 to-elara-900"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-elara-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your first pickup today and experience premium laundry care.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-10 py-4 inline-flex items-center">
            Book Now
            <HiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
