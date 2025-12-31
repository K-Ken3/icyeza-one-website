import React from 'react';
import background from '../background.JPEG'; // adjust path if needed

const Hero = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 text-white px-8 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-serif mb-6">
        Icyeza One Coffee Shop
      </h1>
      <p className="text-xl md:text-2xl mb-10">
        Cozy haven in Kigali • Premium brews, pizzas & good vibes • Open 8am–10pm
      </p>
      <a
        href="#menu"
        className="bg-coffee-medium text-white py-4 px-10 rounded-full text-lg hover:bg-coffee-dark transition"
      >
        Discover Our Menu
      </a>
    </div>
  </section>
);

export default Hero;
