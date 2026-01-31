import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // adjust path if needed

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Promotions', href: '#promos' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let current = 'home';
      document.querySelectorAll('section[id]').forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-coffee-dark/90 backdrop-blur-sm text-white z-50 transition-all duration-300">
      <nav className="flex justify-between items-center p-5 md:p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:gap-4">
          <img src={logo} alt="Icyeza One Logo" className="h-10 md:h-12 w-auto object-contain" />
          <span className="text-xl md:text-2xl font-serif tracking-tight">Icyeza One Coffee Shop</span>
        </div>

        <ul className="hidden md:flex gap-7 lg:gap-9 text-base lg:text-lg">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollTo(item.href.slice(1))}
                className={`transition-colors duration-200 hover:text-coffee-medium ${
                  activeSection === item.href.slice(1) ? 'text-coffee-medium font-medium' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-coffee-dark/95 backdrop-blur-md">
          <ul className="flex flex-col items-center py-6 gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollTo(item.href.slice(1))}
                  className={`transition-colors hover:text-coffee-medium ${
                    activeSection === item.href.slice(1) ? 'text-coffee-medium' : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;