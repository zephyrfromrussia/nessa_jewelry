import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, Heart, Globe } from 'lucide-react';

import { twMerge } from 'tailwind-merge';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={twMerge(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-alrosa-white/95 backdrop-blur-sm py-4 shadow-sm text-alrosa-dark" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest font-medium">
          <Link to="/jewelry" className="hover:text-alrosa-accent transition-colors">УКРАШЕНИЯ</Link>
          <Link to="/diamonds" className="hover:text-alrosa-accent transition-colors">БРИЛЛИАНТЫ</Link>
          <Link to="/exclusive" className="hover:text-alrosa-accent transition-colors">ЭКСКЛЮЗИВ</Link>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden p-2 -ml-2">
          <Menu size={24} strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-[0.2em] text-center">
          NESSA<br/><span className="text-[10px] tracking-[0.4em] font-sans font-light opacity-80 block mt-1">DIAMONDS</span>
        </Link>

        {/* Right Icons */}
        <div className="flex items-center space-x-5 md:space-x-6">
          <button className="flex items-center space-x-2 text-xs tracking-widest font-medium hover:text-alrosa-accent transition-colors">
            <Globe size={18} strokeWidth={1.5} className="hidden md:block" />
            <span className="hidden md:block">RU</span>
          </button>
          <button className="hover:text-alrosa-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-alrosa-accent transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-alrosa-accent transition-colors">
            <Heart size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
