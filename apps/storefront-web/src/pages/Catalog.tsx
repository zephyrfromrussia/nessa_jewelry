import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const ITEMS = [
  { id: '1', name: 'Кольцо с бриллиантом', category: 'Кольца', price: 'от 120 000 ₽', image: 'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800' },
  { id: '2', name: 'Серьги-пусеты', category: 'Серьги', price: 'от 85 000 ₽', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800' },
  { id: '3', name: 'Колье Luminous', category: 'Колье', price: 'от 340 000 ₽', image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?q=80&w=800' },
  { id: '4', name: 'Браслет теннисный', category: 'Браслеты', price: 'от 550 000 ₽', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800' },
  { id: '5', name: 'Кольцо Halo', category: 'Кольца', price: 'от 190 000 ₽', image: 'https://images.unsplash.com/photo-1599643477874-c5a5c11f86fc?q=80&w=800' },
  { id: '6', name: 'Серьги длинные', category: 'Серьги', price: 'от 210 000 ₽', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800' },
];

export function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-alrosa-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <div className="text-xs tracking-widest text-alrosa-gray uppercase mb-4">
                <Link to="/" className="hover:text-alrosa-dark">Главная</Link> <span className="mx-2">/</span> УКРАШЕНИЯ
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-alrosa-dark">Ювелирные украшения</h1>
            </div>
            <p className="text-sm text-alrosa-gray tracking-wider hidden md:block">{ITEMS.length} ИЗДЕЛИЙ</p>
          </div>

          {/* Filters Bar */}
          <div className="border-y border-gray-200 py-4 flex flex-wrap gap-y-4 justify-between items-center bg-white px-6 sticky top-20 z-30">
            <div className="flex items-center space-x-6 md:space-x-8 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full md:w-auto">
              <button onClick={() => setActiveFilter('all')} className={`text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${activeFilter === 'all' ? 'text-alrosa-dark font-medium' : 'text-alrosa-gray hover:text-alrosa-dark'}`}>Все украшения</button>
              <button onClick={() => setActiveFilter('rings')} className={`text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${activeFilter === 'rings' ? 'text-alrosa-dark font-medium' : 'text-alrosa-gray hover:text-alrosa-dark'}`}>Кольца</button>
              <button onClick={() => setActiveFilter('earrings')} className={`text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${activeFilter === 'earrings' ? 'text-alrosa-dark font-medium' : 'text-alrosa-gray hover:text-alrosa-dark'}`}>Серьги</button>
              <button onClick={() => setActiveFilter('necklaces')} className={`text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${activeFilter === 'necklaces' ? 'text-alrosa-dark font-medium' : 'text-alrosa-gray hover:text-alrosa-dark'}`}>Колье</button>
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
              <button className="flex items-center text-xs tracking-widest uppercase text-alrosa-dark hover:text-alrosa-accent transition-colors">
                <SlidersHorizontal size={14} className="mr-2" /> Фильтры
              </button>
              <button className="flex items-center text-xs tracking-widest uppercase text-alrosa-dark hover:text-alrosa-accent transition-colors border-l pl-4 border-gray-200">
                Сортировка <ChevronDown size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          {ITEMS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative aspect-square bg-alrosa-lightGray overflow-hidden mb-6 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 mix-blend-multiply"
                />
                {/* Wishlist icon hover */}
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all hover:bg-white hover:text-alrosa-accent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1 text-alrosa-dark group-hover:text-alrosa-accent transition-colors">{item.name}</h3>
                  <p className="text-alrosa-gray text-[10px] tracking-[0.2em] uppercase mb-4">{item.category}</p>
                </div>
                <p className="text-alrosa-dark text-sm tracking-widest">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-alrosa-dark text-alrosa-dark text-xs tracking-[0.2em] uppercase hover:bg-alrosa-dark hover:text-white transition-colors duration-500">
            Показать ещё
          </button>
        </div>
      </div>
    </div>
  );
}
