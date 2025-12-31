import React, { useState } from 'react';
import logo from '../logo.png';  // Adjust path if needed (e.g., '../../assets/logo.png' if deeper)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-coffee-dark/90 text-white z-50">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt="Icyeza One Coffee Shop Logo" 
            className="h-12 w-auto"  // Adjust height as needed (h-10, h-14, etc.)
          />
          <div className="text-2xl font-serif"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex gap-8 text-lg ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-coffee-dark md:bg-transparent p-8 md:p-0`}>
          <li><a href="#home" className="hover:text-coffee-medium transition">Home</a></li>
          <li><a href="#about" className="hover:text-coffee-medium transition">About</a></li>
          <li><a href="#menu" className="hover:text-coffee-medium transition">Menu</a></li>
          <li><a href="#promos" className="hover:text-coffee-medium transition">Promotions</a></li>
          <li><a href="#blog" className="hover:text-coffee-medium transition">Blog</a></li>
          <li><a href="#contact" className="hover:text-coffee-medium transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Header;