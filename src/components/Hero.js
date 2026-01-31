import React, { useState, useEffect } from 'react';
import BookEventButton from './BookEventButton';

// Your exact 8 hero images (must be in public/assets/)
const heroImages = [
  '/assets/1.jpeg',
  '/assets/2.jpeg',
  '/assets/3.jpeg',
  '/assets/4.jpg',
  '/assets/5.jpeg',
  '/assets/6.jpg',
  '/assets/7.jpg',
  '/assets/8.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('Hero component mounted — starting slideshow with', heroImages.length, 'images');

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % heroImages.length;
        console.log('Switching background →', heroImages[next]);
        return next;
      });
    }, 3000); // 6 seconds total (1.5s swipe + 4.5s hold)

    return () => {
      console.log('Hero component unmounting — clearing slideshow interval');
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Animated background images with 1.5-second left swipe */}
      {heroImages.map((imgSrc, index) => {
        const isActive   = index === currentIndex;
        const isPrevious = index === (currentIndex - 1 + heroImages.length) % heroImages.length;
        const isNext     = index === (currentIndex + 1) % heroImages.length;

        return (
          <div
            key={imgSrc}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out
              ${isActive   ? 'translate-x-0 opacity-100 z-10' : ''}
              ${isPrevious ? '-translate-x-full opacity-0 z-0' : ''}
              ${isNext     ? 'translate-x-[8%] opacity-0 z-0' : ''}
              ${!isActive && !isPrevious && !isNext ? 'translate-x-full opacity-0 z-0' : ''}
            `}
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            {/* Extremely subtle zoom during hold */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out
                ${isActive ? 'scale-[1.015]' : 'scale-100'}
              `}
            />
          </div>
        );
      })}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70 z-20" />

      <div className="relative z-30 text-white px-6 md:px-12 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 tracking-tight drop-shadow-2xl">
          Icyeza One Coffee Shop
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl mb-8 md:mb-12 drop-shadow-xl">
          Your cozy haven in Kigali • Premium brews, fresh food & good vibes • Open daily 8am–10pm
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <BookEventButton />

          <a
            href="#menu"
            className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-full text-lg md:text-xl font-medium hover:bg-white/35 transition"
          >
            Explore Menu & Specials
          </a>
        </div>

        <p className="mt-8 md:mt-10 text-base md:text-lg drop-shadow-lg">
          Perfect for work sessions, meetups, events or simply relaxing with friends
        </p>
      </div>
    </section>
  );
};

export default Hero;