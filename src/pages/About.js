import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiHeart,
  HiLightBulb,
  HiUserGroup,
  HiGlobe,
  HiShieldCheck,
  HiSparkles,
  HiCheck,
  HiArrowRight,
} from 'react-icons/hi';

const About = () => {
  const values = [
    {
      icon: HiHeart,
      title: 'Care & Quality',
      description: 'Every garment is treated with meticulous attention to detail, as if it were our own.',
    },
    {
      icon: HiLightBulb,
      title: 'Innovation',
      description: 'We continuously adopt the latest cleaning technologies and eco-friendly practices.',
    },
    {
      icon: HiUserGroup,
      title: 'Customer First',
      description: 'Your satisfaction drives everything we do. We listen, adapt, and deliver beyond expectations.',
    },
    {
      icon: HiGlobe,
      title: 'Sustainability',
      description: 'Committed to reducing our environmental footprint with green cleaning solutions.',
    },
  ];

  const team = [
    {
      name: 'Isaac Ogwu Omale',
      role: 'Founder & CEO',
      image: '/images/team/isaac-ogwu-omale.png',
    },
    {
      name: 'Gloria Inah',
      role: 'Managing Director',
      image: '/images/team/gloria-inah.png',
    },
    {
      name: 'Victor Idumajogwu',
      role: 'Operations Manager',
      image: '/images/team/victor-idumajogwu.png',
    },
  ];

  const milestones = [
    { year: '2016', title: 'Founded', description: "EL'ARA was born in October from a passion for premium fabric care." },
    { year: '2018', title: 'Expanded Services', description: 'Added dry cleaning and specialty garment care.' },
    { year: '2021', title: 'Pickup & Delivery', description: 'Launched our convenient doorstep service.' },
    { year: '2025', title: '10,000 Customers', description: 'Reached a milestone of 10,000 happy customers.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521656693700-f4d769312e73?w=1920&q=80"
            alt="About EL'ARA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-elara-950/95 to-elara-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HiSparkles className="text-elara-300" />
              <span className="text-white/90 text-sm font-medium">Our Story</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              More Than Just
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-elara-300 to-blue-300">
                A Laundry Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At EL'ARA, we believe that clean clothes are more than just a necessity &mdash; they're a
              reflection of how you present yourself to the world. That's why we pour passion and
              expertise into every garment we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">About EL'ARA</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-6">
                Built on a Foundation of Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in October 2016, EL'ARA began with a simple mission: to redefine the laundry experience.
                  We noticed that most laundry services treated garments as just another load of clothes.
                  We believed there was a better way.
                </p>
                <p>
                  Today, EL'ARA is trusted by thousands of customers who value quality, convenience,
                  and sustainability. Our team of skilled professionals uses state-of-the-art equipment
                  and eco-friendly products to ensure every garment receives the care it deserves.
                </p>
                <p>
                  From everyday laundry to specialized cleaning for luxury fabrics, we handle it all
                  with the same level of dedication and expertise that has made us a leading name in
                  the industry.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'Eco-friendly products',
                  'Skilled professionals',
                  'Modern equipment',
                  'Quality guaranteed',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <HiCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80"
                alt="EL'ARA laundry facility"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-elara-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">9+</p>
                <p className="text-elara-100 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every garment we clean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-elara-50 flex items-center justify-center mb-6 group-hover:bg-elara-600 transition-colors duration-300">
                  <value.icon className="text-elara-600 text-3xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-elara-100"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-gray-50 p-6 rounded-2xl inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="text-elara-600 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-elara-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-elara-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mt-3 mb-4">
              Meet the People Behind EL'ARA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to delivering exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elara-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-elara-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elara-600 via-elara-700 to-elara-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HiShieldCheck className="text-white/30 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Ready to Experience the EL'ARA Difference?
          </h2>
          <p className="text-elara-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their garments.
            Schedule your first pickup today.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-10 py-4 inline-flex items-center">
            Get Started Today
            <HiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
