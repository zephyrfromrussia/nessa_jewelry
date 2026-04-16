import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SHAPES = [
  { id: 'round', name: 'Круглый', icon: '○' },
  { id: 'princess', name: 'Принцесса', icon: '□' },
  { id: 'emerald', name: 'Изумруд', icon: '▯' },
  { id: 'pear', name: 'Груша', icon: '💧' },
  { id: 'oval', name: 'Овал', icon: '⬭' },
  { id: 'cushion', name: 'Кушон', icon: '⛝' },
];

const COLORS = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const CLARITIES = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];

const DIAMONDS = [
  { id: 'd1', shape: 'Круглый', carat: 1.05, color: 'D', clarity: 'VVS1', cut: 'Excellent', price: '1 250 000 ₽', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800' },
  { id: 'd2', shape: 'Овал', carat: 2.10, color: 'F', clarity: 'VS1', cut: 'Excellent', price: '2 800 000 ₽', image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800' },
  { id: 'd3', shape: 'Изумруд', carat: 3.50, color: 'E', clarity: 'VVS2', cut: 'Excellent', price: '4 500 000 ₽', image: 'https://images.unsplash.com/photo-1599643477874-c5a5c11f86fc?q=80&w=800' },
  { id: 'd4', shape: 'Принцесса', carat: 0.90, color: 'G', clarity: 'VS2', cut: 'Very Good', price: '750 000 ₽', image: 'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800' },
];

export function Diamonds() {
  const [activeShapes, setActiveShapes] = useState<string[]>([]);
  const caratRange = [0.5, 5.0];
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [activeClarities, setActiveClarities] = useState<string[]>([]);

  const toggleShape = (id: string) => {
    setActiveShapes(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const toggleColor = (c: string) => {
    setActiveColors(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const toggleClarity = (c: string) => {
    setActiveClarities(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  return (
    <div className="min-h-screen bg-alrosa-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-alrosa-dark mb-4">Бриллианты</h1>
          <p className="text-alrosa-gray font-light text-sm tracking-wider uppercase">Индивидуальный подбор камня</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4 bg-white p-6 border border-gray-100 sticky top-24">
            <h3 className="font-serif text-xl mb-8">Фильтры</h3>
            
            {/* Shapes */}
            <div className="mb-8">
              <h4 className="text-xs tracking-[0.2em] text-alrosa-gray uppercase mb-4">Форма</h4>
              <div className="grid grid-cols-3 gap-2">
                {SHAPES.map(shape => (
                  <button 
                    key={shape.id}
                    onClick={() => toggleShape(shape.id)}
                    className={`flex flex-col items-center justify-center p-3 border transition-colors ${
                      activeShapes.includes(shape.id) 
                        ? 'border-alrosa-dark bg-alrosa-dark text-white' 
                        : 'border-gray-200 hover:border-alrosa-gray text-alrosa-dark'
                    }`}
                  >
                    <span className="text-2xl mb-1">{shape.icon}</span>
                    <span className="text-[9px] tracking-widest uppercase">{shape.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Carat & Price Mock */}
            <div className="mb-8 space-y-6">
              <div>
                <div className="flex justify-between text-xs tracking-widest text-alrosa-gray uppercase mb-2">
                  <span>Каратность</span>
                  <span className="text-alrosa-dark">{caratRange[0]} - {caratRange[1]}</span>
                </div>
                <div className="h-1 bg-gray-200 w-full relative mt-4">
                  <div className="absolute left-[10%] right-[20%] h-full bg-alrosa-dark"></div>
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-alrosa-dark rounded-full cursor-pointer"></div>
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-alrosa-dark rounded-full cursor-pointer"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs tracking-widest text-alrosa-gray uppercase mb-2">
                  <span>Цена (₽)</span>
                  <span className="text-alrosa-dark">100k - 10m</span>
                </div>
                <div className="h-1 bg-gray-200 w-full relative mt-4">
                  <div className="absolute left-[0%] right-[30%] h-full bg-alrosa-dark"></div>
                  <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-alrosa-dark rounded-full cursor-pointer"></div>
                  <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-alrosa-dark rounded-full cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <h4 className="text-xs tracking-[0.2em] text-alrosa-gray uppercase mb-4">Цвет</h4>
              <div className="flex flex-wrap gap-2">
                {COLORS.map(c => (
                  <button 
                    key={c}
                    onClick={() => toggleColor(c)}
                    className={`w-10 h-10 border text-xs transition-colors ${
                      activeColors.includes(c) ? 'border-alrosa-dark bg-alrosa-dark text-white' : 'border-gray-200 hover:border-alrosa-gray'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Clarity */}
            <div className="mb-8">
              <h4 className="text-xs tracking-[0.2em] text-alrosa-gray uppercase mb-4">Чистота</h4>
              <div className="flex flex-wrap gap-2">
                {CLARITIES.map(c => (
                  <button 
                    key={c}
                    onClick={() => toggleClarity(c)}
                    className={`px-3 h-10 border text-xs transition-colors ${
                      activeClarities.includes(c) ? 'border-alrosa-dark bg-alrosa-dark text-white' : 'border-gray-200 hover:border-alrosa-gray'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-alrosa-dark text-white text-xs tracking-[0.2em] uppercase hover:bg-alrosa-accent transition-colors mt-4">
              Применить фильтры
            </button>
            <button className="w-full py-4 text-xs tracking-[0.2em] uppercase text-alrosa-gray hover:text-alrosa-dark transition-colors mt-2">
              Сбросить
            </button>
          </div>

          {/* Results Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <span className="text-sm text-alrosa-gray tracking-wider">{DIAMONDS.length} БРИЛЛИАНТОВ</span>
              <button className="flex items-center text-xs tracking-widest uppercase text-alrosa-dark hover:text-alrosa-accent transition-colors">
                Сортировка <ChevronDown size={14} className="ml-2" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIAMONDS.map((diamond, idx) => (
                <motion.div 
                  key={diamond.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group cursor-pointer bg-white border border-transparent hover:border-gray-100 p-4 transition-colors"
                >
                  <div className="aspect-square bg-alrosa-lightGray mb-6 overflow-hidden relative">
                    <img 
                      src={diamond.image} 
                      alt={`${diamond.carat}ct ${diamond.shape}`} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-serif text-xl mb-1 text-alrosa-dark">{diamond.carat.toFixed(2)} ct {diamond.shape}</h3>
                    <p className="text-xs text-alrosa-gray tracking-widest mb-4 uppercase">
                      Цвет: {diamond.color} | Чистота: {diamond.clarity}
                    </p>
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                      <span className="text-sm font-medium tracking-wider">{diamond.price}</span>
                      <span className="text-[10px] tracking-[0.2em] text-alrosa-dark uppercase group-hover:text-alrosa-accent transition-colors border-b border-alrosa-dark group-hover:border-alrosa-accent pb-0.5">
                        Подробнее
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
