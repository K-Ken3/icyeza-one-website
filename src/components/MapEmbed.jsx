import React from 'react';
import FadeInSection from './FadeInSection';

const MapEmbed = () => (
  <section id="location" className="py-28 md:py-32 px-6 md:px-8 bg-white dark:bg-gray-800">
    <FadeInSection>
      <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark dark:text-coffee-light mb-8 md:mb-12 text-center">
        Find Us in Kigali
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 md:mb-14 max-w-3xl mx-auto">
        We're conveniently located — drop by for your daily brew, Tuesday pizza promo, Thursday burger deal, or Sunday shawarma after church!
      </p>
    </FadeInSection>

    <FadeInSection delay={0.2}>
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-coffee-dark/10 dark:border-coffee-medium/20">
        <iframe
          title="Icyeza One Coffee Shop Location – Kigali, Rwanda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4022467382115!2d30.074073974805113!3d-1.994059297987934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca9c63992472b%3A0x8105b0e4864335e2!2sIcyeza%20One%20Coffee%20Shop!5e0!3m2!1sfr!2srw!4v1769859380853!5m2!1sfr!2srw" //google map code
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="text-center mt-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
        Get directions • Parking available • Easy access from main roads
      </p>
    </FadeInSection>
  </section>
);

export default MapEmbed;