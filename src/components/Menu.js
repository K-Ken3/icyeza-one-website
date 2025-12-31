import React from 'react';

const Menu = () => (
  <section id="menu" className="py-32 px-8 bg-white">
    <h2 className="text-4xl md:text-5xl font-serif text-coffee-dark mb-16 text-center">Highlighted Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
      <div className="bg-latte-light rounded-2xl shadow-xl overflow-hidden">
        <img src="https://i.ytimg.com/vi/_WANqVXgfNU/maxresdefault.jpg" alt="Signature Lattes" className="w-full h-80 object-cover" />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4">Signature Lattes</h3>
          <p>Beautiful latte art with emotional support in every sip.</p>
        </div>
      </div>
      <div className="bg-latte-light rounded-2xl shadow-xl overflow-hidden">
        <img src="https://img.delicious.com.au/Rb41p3gr/del/2024/01/mango-iced-tea-spritzer-205286-2.jpg" alt="Mango Iced Tea" className="w-full h-80 object-cover" />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4">Mango Iced Tea</h3>
          <p>Refreshing and fruity—perfect for Kigali's warm days.</p>
        </div>
      </div>
      <div className="bg-latte-light rounded-2xl shadow-xl overflow-hidden">
        <img src="https://images.101cookbooks.com/pizza-toppings-h.jpg?w=1200&auto=compress&auto=format" alt="Gourmet Pizzas" className="w-full h-80 object-cover" />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4">Gourmet Pizzas</h3>
          <p>Fresh toppings—don't miss our BOGO deals!</p>
        </div>
      </div>
      <div className="bg-latte-light rounded-2xl shadow-xl overflow-hidden">
        <img src="https://coffeegeek.com/wp-content/uploads/2021/10/shotscale-1.jpg" alt="Classic Espressos" className="w-full h-80 object-cover" />
        <div className="p-8 text-center">
          <h3 className="text-2xl font-serif mb-4">Classic Espressos</h3>
          <p>Premium beans, expertly brewed.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;