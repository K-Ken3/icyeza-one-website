import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-coffee-dark/90 text-white z-50">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-serif">Icyeza One Coffee Shop</div>
        <ul className={`md:flex gap-8 text-lg ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-coffee-dark md:bg-transparent p-8 md:p-0`}>
          <li><a href="#home" className="hover:text-coffee-medium transition">Home</a></li>
          <li><a href="#about" className="hover:text-coffee-medium transition">About</a></li>
          <li><a href="#menu" className="hover:text-coffee-medium transition">Menu</a></li>
          <li><a href="#blog" className="hover:text-coffee-medium transition">Blog</a></li>
          <li><a href="#contact" className="hover:text-coffee-medium transition">Contact</a></li>
        </ul>
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>☰</div>
      </nav>
    </header>
  );
};

export default Header;