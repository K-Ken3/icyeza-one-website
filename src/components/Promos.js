import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import PromoModal from './PromoModal';
import pizza from '../pizza.jpg';
import burger from '../burger.jpg';
import shawarma from '../shawarma.jpg';

const promos = [
  {
    title: 'Tuesday Pizza Promo',
    desc: 'Buy One Gourmet Pizza, Get One Free!',
    day: 'Every Tuesday – Gather and share in our cozy vibe',
    img: pizza,
  },
  {
    title: 'Thursday Burger Deals',
    desc: 'Juicy Burgers with Special Combos or Buy One Get One Free!',
    day: 'Every Thursday – Fuel up for the weekend',
    img: burger,
  },
  {
    title: 'Sunday Shawarma Special',
    desc: 'Flavorful Shawarmas – Perfect After Church!',
    day: 'Every Sunday – Relax with family & friends',
    img: shawarma,
  },
];

const Promos = () => {
  const [selectedPromo, setSelectedPromo] = useState(null);

  return (
    <section id="promos" className="py-28 md:py-32 px-6 md:px-8 bg-latte-light dark:bg-gray-800">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark dark:text-coffee-light mb-12 md:mb-16 text-center">
          Special Promotions
        </h2>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">
        {promos.map((promo, index) => (
          <FadeInSection key={promo.title} delay={index * 0.15}>
            <div
              onClick={() => setSelectedPromo(promo)}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-7 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-serif mb-3 text-coffee-medium dark:text-coffee-light group-hover:text-coffee-dark dark:group-hover:text-white transition-colors">
                  {promo.title}
                </h3>
                <p className="text-base md:text-lg mb-2">{promo.desc}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{promo.day}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <PromoModal
        isOpen={!!selectedPromo}
        onClose={() => setSelectedPromo(null)}
        promo={selectedPromo}
      />
    </section>
  );
};

export default Promos;