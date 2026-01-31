import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Promos from './components/Promos';
import Gallery from './components/Gallery';
import MapEmbed from './components/MapEmbed';
import Blog from './components/Blog';
import Footer from './components/Footer';
import TodaysSpecialBanner from './components/TodaysSpecialBanner';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-latte-light dark:bg-gray-900 text-text-warm dark:text-gray-100 transition-colors duration-500">
      <Header />
      <TodaysSpecialBanner />
      <main>
        <Hero />
        <About />
        <Menu />
        <Promos />
        <Gallery />
        <MapEmbed />
        <Blog />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;