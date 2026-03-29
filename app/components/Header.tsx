import { Link } from "react-router";
import { Phone, Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <nav className="glass-card rounded-2xl px-6 py-2 flex justify-between items-center shadow-2xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="">
              <img
                className="h-14 md:h-24 w-auto object-fit"
                src="/assets/spc-logo.png"
                alt="Star Pest Control"
              />
            </div>

          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-brand-purple font-semibold hover:text-brand-orange transition-colors">Home</Link>
            <Link to="#about" className="text-brand-purple font-semibold hover:text-brand-orange transition-colors">About</Link>
            <Link to="#services" className="text-brand-purple font-semibold hover:text-brand-orange transition-colors">Services</Link>
            <Link to="#solutions" className="text-brand-purple font-semibold hover:text-brand-orange transition-colors">Solutions</Link>
            <Link to="#contact" className="text-brand-purple font-semibold hover:text-brand-orange transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+918790851377"
              className="bg-brand-purple text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-purple-dark transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">+91 9885271305</span>
            </a>

            <button
              className="md:hidden p-2 text-brand-purple hover:bg-brand-purple/5 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Glassmorphic) */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-2xl mt-4 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <Link to="/" className="block text-brand-purple font-bold text-lg">Home</Link>
            <Link to="#about" className="block text-brand-purple font-bold text-lg">About</Link>
            <Link to="#services" className="block text-brand-purple font-bold text-lg">Services</Link>
            <Link to="#solutions" className="block text-brand-purple font-bold text-lg">Solutions</Link>
            <Link to="#contact" className="block text-brand-purple font-bold text-lg">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
