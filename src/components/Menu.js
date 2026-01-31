import React from 'react';
import FadeInSection from './FadeInSection';

// Replace with your real local images (or remove img if you prefer text-only cards)
import latteImg from '../assets/latte.jpg';
import icedTeaImg from '../assets/9.jpg';
import espressoImg from '../assets/espresso.jpg';
import pizzaImg from '../assets/pizza.jpg';
import burgerImg from '../assets/burger.jpg';
import shawarmaImg from '../assets/shawarma.jpg';

const highlightedDrinks = [
  { name: 'Signature Latte', price: 'RWF 2,500', desc: 'Beautiful art, emotional support in every sip', img: latteImg },
  { name: 'Mango Smoothie',   price: 'RWF 3,000', desc: 'Refreshing & fruity – perfect for warm days', img: icedTeaImg },
  { name: 'Classic Espresso', price: 'RWF 2,500', desc: 'Premium beans, expertly brewed', img: espressoImg },
];

const highlightedFoods = [
  { name: 'Gourmet Pizza',    price: 'RWF 9,300', desc: 'Fresh toppings – Tuesday BOGO deal!', img: pizzaImg },
  { name: 'Juicy Burger',     price: 'RWF 6,000', desc: 'Special combos or Thursday BOGO', img: burgerImg },
  { name: 'Chicken Shawarma', price: 'RWF 7,300', desc: 'Flavorful wrap – Sunday after-church special', img: shawarmaImg },
];

const Menu = () => {
  const openFullMenu = () => {
    // Opens full menu in a new tab – you can change this URL later
    window.open('/menu.pdf', '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-20 px-6 md:px-8 bg-white dark:bg-gray-800">
      <FadeInSection>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark dark:text-white mb-10 md:mb-12 text-center">
          Our Menu
        </h2>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
        {/* Drinks Card */}
        <FadeInSection delay={0.1}>
          <div className="bg-latte-light dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl md:text-3xl font-serif text-coffee-dark dark:text-white mb-6 text-center">
                Drinks Menu
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              {highlightedDrinks.map((item) => (
                <div key={item.name} className="flex items-start gap-5">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-lg md:text-xl font-medium text-coffee-dark dark:text-gray-100">
                        {item.name}
                      </h4>
                      <span className="text-lg font-semibold text-coffee-medium dark:text-accent-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-600 text-center">
              <button
                onClick={openFullMenu}
                className="inline-flex items-center gap-2 bg-coffee-medium text-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-coffee-dark transition shadow-md hover:shadow-lg"
              >
                Read More – Full Drinks Menu
              </button>
            </div>
          </div>
        </FadeInSection>

        {/* Foods Card */}
        <FadeInSection delay={0.2}>
          <div className="bg-latte-light dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="p-8 md:p-10 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl md:text-3xl font-serif text-coffee-dark dark:text-white mb-6 text-center">
                Foods Menu
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              {highlightedFoods.map((item) => (
                <div key={item.name} className="flex items-start gap-5">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-lg md:text-xl font-medium text-coffee-dark dark:text-gray-100">
                        {item.name}
                      </h4>
                      <span className="text-lg font-semibold text-coffee-medium dark:text-accent-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-600 text-center">
              <button
                onClick={openFullMenu}
                className="inline-flex items-center gap-2 bg-coffee-medium text-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-coffee-dark transition shadow-md hover:shadow-lg"
              >
                Read More – Full Foods Menu
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Menu;