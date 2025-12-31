import React from 'react';
import pizza from '../pizza.jpg';        // Your local pizza promo image
import burger from '../burger.jpg';        // Your local burger promo image
import shawarma from '../shawarma.jpg';    // Your local shawarma promo image

const Promos = () => (
  <section id="promos" className="py-32 px-8 bg-latte-light">
    <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark mb-16 text-center">Special Promotions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
      {/* Tuesday: BOGO Pizza */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img 
          src={pizza} 
          alt="Tuesday BOGO Pizza Promotion" 
          className="w-full h-80 object-cover" 
        />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4 text-coffee-medium">Tuesday Pizza Nights</h3>
          <p className="text-lg">Buy One Gourmet Pizza,<br />Get One Free!</p>
          <p className="mt-4 text-sm text-gray-600">Every Tuesday – Gather and share in our cozy vibe</p>
        </div>
      </div>

      {/* Thursday: Burgers */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img 
          src={burger} 
          alt="Thursday Burger Special" 
          className="w-full h-80 object-cover" 
        />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4 text-coffee-medium">Thursday Burger Deals</h3>
          <p className="text-lg">Juicy Burgers with Special Combos<br />or Buy One Get One Free!</p>
          <p className="mt-4 text-sm text-gray-600">Every Thursday – Fuel up for the weekend</p>
        </div>
      </div>

      {/* Sunday: Shawarmas After Church */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img 
          src={shawarma} 
          alt="Sunday Shawarma Special" 
          className="w-full h-80 object-cover" 
        />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4 text-coffee-medium">Sunday Shawarma Special</h3>
          <p className="text-lg">Flavorful Shawarmas<br />Perfect After Church!</p>
          <p className="mt-4 text-sm text-gray-600">Every Sunday – Relax with family & friends</p>
        </div>
      </div>
    </div>
  </section>
);

export default Promos;