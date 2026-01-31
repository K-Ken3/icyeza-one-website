import React from 'react';
import FadeInSection from './FadeInSection';

const galleryItems = [
  { type: 'image', src: '/assets/gallery/1.jpeg', alt: 'Cozy seating area with plants & natural light' },
  { type: 'image', src: '/assets/gallery/latte.jpg', alt: 'Beautiful signature latte art in a cup' },
  { type: 'image', src: '/assets/gallery/pizza-night.jpeg', alt: 'Friends sharing well brewed Espresso' },
  { type: 'image', src: '/assets/gallery/download.jpg', alt: 'Refreshing cafe late on a foogy day' },
  { type: 'image', src: '/assets/gallery/pizza.jpg', alt: 'Calling Tuesday Pizza deal with fresh toppings' },
  { type: 'image', src: '/assets/gallery/9.jpeg', alt: 'Flavorful Sunday shawarma after church' },
  { type: 'image', src: '/assets/gallery/3.jpeg', alt: 'Welcoming entrance of Icyeza One in Kigali' },
  {
    type: 'video',
    src: '/assets/gallery/your-video.mp4', // ← PUT YOUR VIDEO HERE
    alt: 'Icyeza events coffee cattering – brewing coffee & happy customers',
    poster: '/assets/gallery/event-corner.jpg', // ← optional thumbnail (first frame)
  },
];

const Gallery = () => (
  <section id="gallery" className="py-28 md:py-32 px-6 md:px-8 bg-latte-light dark:bg-gray-800">
    <FadeInSection>
      <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark dark:text-coffee-light mb-8 md:mb-12 text-center">
        Inside Icyeza One Coffee Shop
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 md:mb-14 max-w-3xl mx-auto">
        Take a peek at our warm interior, signature drinks, fresh food & the good vibes that make every visit special.
      </p>
    </FadeInSection>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
      {galleryItems.map((item, index) => (
        <FadeInSection key={item.alt || item.src} delay={index * 0.08}>
          <div className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] relative">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                poster={item.poster}
                alt={item.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />
            )}

            {/* Caption overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-sm md:text-base font-medium drop-shadow-md">
                {item.alt}
              </p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>

    <FadeInSection delay={0.5}>
      <div className="text-center mt-12 md:mt-16">
        <a
          href="https://www.instagram.com/icyezaone/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-coffee-medium text-white px-8 py-4 rounded-full text-lg md:text-xl font-medium hover:bg-coffee-dark transition shadow-lg hover:shadow-xl"
        >
          See More on Instagram →
        </a>
      </div>
    </FadeInSection>
  </section>
);

export default Gallery;