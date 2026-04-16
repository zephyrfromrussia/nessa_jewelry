import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, Heart, Globe, ChevronRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

const JEWELRY_MENU = [
  { name: 'Кольца', link: '/jewelry/rings' },
  { name: 'Серьги', link: '/jewelry/earrings' },
  { name: 'Пусеты', link: '/jewelry/studs' },
  { name: 'Колье', link: '/jewelry/necklaces' },
  { name: 'Браслеты', link: '/jewelry/bracelets' },
  { name: 'Подвески', link: '/jewelry/pendants' },
  { name: 'Броши', link: '/jewelry/brooches' },
  { name: 'Каффы', link: '/jewelry/cuffs' },
  { name: 'Моносерьги', link: '/jewelry/single-earrings' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar theme
  const isDarkText = !isHome || scrolled || isHovered || activeMenu;
  const navBg = (scrolled || isHovered || activeMenu) ? 'bg-alrosa-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = isDarkText ? 'text-alrosa-dark' : 'text-white';

  return (
    <>
      <header 
        className={twMerge(
          "fixed top-0 w-full z-50 transition-all duration-500",
          navBg,
          textColor
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveMenu(null);
        }}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Left Links */}
          <div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest font-medium h-full">
            <div 
              className="h-full flex items-center cursor-pointer hover:text-alrosa-accent transition-colors"
              onMouseEnter={() => setActiveMenu('jewelry')}
            >
              УКРАШЕНИЯ
            </div>
            <Link to="/diamonds" className="hover:text-alrosa-accent transition-colors" onMouseEnter={() => setActiveMenu(null)}>
              БРИЛЛИАНТЫ
            </Link>
            <Link to="/exclusive" className="hover:text-alrosa-accent transition-colors" onMouseEnter={() => setActiveMenu(null)}>
              ЭКСКЛЮЗИВ
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden p-2 -ml-2 hover:text-alrosa-accent transition-colors">
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-[0.2em] text-center" onMouseEnter={() => setActiveMenu(null)}>
            NESSA<br/><span className="text-[10px] tracking-[0.4em] font-sans font-light opacity-80 block mt-1">DIAMONDS</span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 md:space-x-6 h-full" onMouseEnter={() => setActiveMenu(null)}>
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
            <button className="hover:text-alrosa-accent transition-colors relative">
              <Heart size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-2 bg-alrosa-dark text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu === 'jewelry' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 w-full bg-alrosa-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-12 py-12 flex">
                <div className="w-1/4">
                  <h3 className="text-xs tracking-[0.2em] text-alrosa-gray mb-8 uppercase font-medium">Категории</h3>
                  <ul className="space-y-4">
                    {JEWELRY_MENU.map((item) => (
                      <li key={item.name}>
                        <Link 
                          to={item.link} 
                          onClick={() => setActiveMenu(null)}
                          className="text-alrosa-dark hover:text-alrosa-accent transition-colors text-sm tracking-wider font-light flex items-center group"
                        >
                          <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="pt-4 mt-4 border-t border-gray-100">
                      <Link 
                        to="/jewelry" 
                        onClick={() => setActiveMenu(null)}
                        className="text-xs tracking-[0.2em] uppercase text-alrosa-dark hover:text-alrosa-accent transition-colors flex items-center font-medium"
                      >
                        Смотреть все <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="w-1/4">
                  <h3 className="text-xs tracking-[0.2em] text-alrosa-gray mb-8 uppercase font-medium">Коллекции</h3>
                  <ul className="space-y-4">
                    <li><Link to="/collections/luminous" className="text-sm tracking-wider font-light hover:text-alrosa-accent transition-colors">Luminous</Link></li>
                    <li><Link to="/collections/heritage" className="text-sm tracking-wider font-light hover:text-alrosa-accent transition-colors">Heritage</Link></li>
                    <li><Link to="/collections/modern" className="text-sm tracking-wider font-light hover:text-alrosa-accent transition-colors">Modern Art</Link></li>
                  </ul>
                </div>

                <div className="w-1/2 pl-12">
                  <Link to="/jewelry/new" onClick={() => setActiveMenu(null)} className="group block relative overflow-hidden aspect-[16/9] max-h-[300px]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1599643477874-c5a5c11f86fc?q=80&w=1200&auto=format&fit=crop" 
                      alt="Новая коллекция" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-white text-xs tracking-[0.2em] uppercase font-medium">Новинки сезона</span>
                      <h4 className="text-white text-2xl font-serif mt-2">Весеннее пробуждение</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Overlay backdrop when menu is open */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-alrosa-dark/20 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
}
