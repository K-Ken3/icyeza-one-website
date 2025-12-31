import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-coffee-dark py-6">
    <div className="max-w-7xl mx-auto flex justify-center gap-10 text-white">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/icyeza_one_coffee_shop/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-coffee-medium transition transform hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram size={28} />
      </a>

      {/* Call */}
      <a
        href="tel:+250788519671"
        className="hover:text-coffee-medium transition transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={28} />
      </a>

      {/* Email */}
      <a
        href="mailto:icyezacoffee@gmail.com"
        className="hover:text-coffee-medium transition transform hover:scale-110"
        aria-label="Email us"
      >
        <Mail size={28} />
      </a>

    </div>

    <p className="text-center text-sm text-white/60 mt-4">
      © {new Date().getFullYear()} Icyeza One Coffee Shop
    </p>
  </footer>
);

export default Footer;
