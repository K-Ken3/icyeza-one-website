import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const days = {
  0: { title: 'Sunday Shawarma Special', desc: 'Flavorful shawarmas – perfect after church!', isSpecial: true },
  1: { title: 'Monday', desc: 'Full menu & cozy vibes all day', isSpecial: false },
  2: { title: 'Tuesday Pizza Nights', desc: 'Buy One Gourmet Pizza, Get One Free!', isSpecial: true },
  3: { title: 'Wednesday', desc: 'Great coffee & relaxed atmosphere', isSpecial: false },
  4: { title: 'Thursday Burger Deals', desc: 'Juicy burgers – special combos or BOGO!', isSpecial: true },
  5: { title: 'Friday', desc: 'Wind down with us after the week', isSpecial: false },
  6: { title: 'Saturday', desc: 'Weekend relaxation in our cozy haven', isSpecial: false },
};

const WHATSAPP_NUMBER = '250788123456'; // CHANGE THIS
const WHATSAPP_MESSAGE = (title) => `Hi Icyeza One! ☕ I'm interested in today's special: ${title}. Can you tell me more or reserve a spot?`;

const TodaysSpecialBanner = () => {
  const [today, setToday] = useState(null);

  useEffect(() => {
    const dayIndex = new Date().getDay();
    setToday(days[dayIndex]);
  }, []);

  if (!today) return null;

  const whatsappLink = today.isSpecial
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE(today.title))}`
    : null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 mt-16 md:mt-20 py-3 px-4 text-center shadow-lg ${
        today.isSpecial
          ? 'bg-gradient-to-r from-coffee-medium to-coffee-dark text-white'
          : 'bg-latte-light/95 text-coffee-dark border-b border-coffee-dark/20 backdrop-blur-sm dark:bg-gray-800 dark:text-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-base md:text-lg">
        <span className="font-serif font-bold tracking-tight">{today.title}</span>
        <span className="opacity-95">{today.desc}</span>

        {today.isSpecial && whatsappLink && (
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="ml-2 md:ml-4 bg-white text-coffee-dark px-5 py-2 rounded-full text-sm md:text-base font-medium shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.438 0-2.847-.402-4.072-1.161l-.292-.178-3.024.792.806-2.943-.19-.302c-.804-1.274-1.227-2.756-1.227-4.28 0-4.432 3.61-8.042 8.043-8.042 2.15 0 4.168.838 5.687 2.357 1.518 1.518 2.355 3.536 2.355 5.686 0 4.432-3.61 8.043-8.043 8.043z"/>
            </svg>
            Chat on WhatsApp
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TodaysSpecialBanner;