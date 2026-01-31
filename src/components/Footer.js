import React from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const message = `New enquiry from website:\nName: ${data.name}\nPhone/WhatsApp: ${data.phone}\nMessage: ${data.message}`;
    const whatsappLink = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`; // CHANGE TO YOUR REAL NUMBER

    window.open(whatsappLink, '_blank');
    reset();
  };

  return (
    <footer id="contact" className="py-16 px-6 md:px-8 bg-coffee-dark text-white">
      <div className="max-w-7xl mx-auto">
        {/* Instagram Preview */}
        <div className="mb-12 md:mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">
            Connect with Us 
          </h3>
          <p className="text-base md:text-lg mb-8 opacity-90">
            Fresh brews, pizza nights, happy moments — follow along!
          </p>

          <div className="instagram-feed-container mx-auto max-w-5xl">
            <div className="sk-instagram-feed" data-embed-id="25649127"></div>
            <script src="https://widgets.sociablekit.com/instagram-feed/widget.js" defer></script>
          </div>

          <p className="text-sm opacity-70 mt-6">
            Loading latest posts... or visit{' '}
            <a 
              href="https://www.instagram.com/icyeza_one_coffee_shop/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-coffee-medium transition"
            >
              @icyeza_one_coffee_shop
            </a>{' '}
            directly!
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif mb-8">Visit & Connect With Us</h2>
            <p className="text-lg mb-6">Kigali, Rwanda | Open Daily 8am-10pm</p>

            <div className="flex flex-col gap-5 text-lg">
              <a 
                href="mailto:info@icyezaone.com" 
                className="flex items-center justify-center md:justify-start gap-3 hover:text-coffee-medium transition"
              >
                <span>icyezacoffee@gmail.com</span>
              </a>
              <a 
                href="tel:+250788519671" 
                className="flex items-center justify-center md:justify-start gap-3 hover:text-coffee-medium transition"
              >
                <span>+250 788 519 671</span>
              </a>
              <a 
                href="https://www.instagram.com/icyeza_one_coffee_shop/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start gap-3 hover:text-coffee-medium transition"
              >
                <span>@icyezaonecoffeeshop</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6 text-center md:text-left">
              Reserve a Table or Ask a Question
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-coffee-medium transition"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}

              <input
                type="tel"
                placeholder="Phone / WhatsApp Number"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-coffee-medium transition"
                {...register('phone', { required: 'Phone is required' })}
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}

              <textarea
                rows={4}
                placeholder="Your message (e.g. reservation for Tuesday pizza night, event enquiry, etc.)"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-coffee-medium transition"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}

              <button
                type="submit"
                className="w-full bg-coffee-medium text-white py-3 px-6 rounded-lg font-medium hover:bg-coffee-dark transition shadow-md hover:shadow-lg"
              >
                Send via WhatsApp →
              </button>
            </form>
          </div>
        </div>

        {/* Copyright & Credits - added at the very bottom */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-80">
          <p>©{new Date().getFullYear()}. The Icyeza One Coffee Shop. All Rights Reserved.</p>
          <p className="mt-1">
            Coffee House Website Designed & Developed by{' '}
            <a
              href="https://your-portfolio-link.com" // ← my portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-coffee-medium transition underline"
            >
              Dev_Ken
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;