import { useState } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const EXCLUSIVES = [
  {
    id: 'e1',
    name: 'Кольцо с желтым бриллиантом',
    carat: '5.2 ct',
    price: 'По запросу',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop',
    branch: 'Москва, ул. Петровка, 10',
    reserved: false
  },
  {
    id: 'e2',
    name: 'Колье "Сердце Океана"',
    carat: '12.4 ct',
    price: 'По запросу',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?q=80&w=800&auto=format&fit=crop',
    branch: 'Дубай, Dubai Mall',
    reserved: true
  },
  {
    id: 'e3',
    name: 'Серьги с изумрудами',
    carat: '8.1 ct',
    price: 'По запросу',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    branch: 'Москва, Барвиха Luxury Village',
    reserved: false
  }
];

export function ExclusiveCatalog() {
  const [country, setCountry] = useState('RU');

  return (
    <div className="min-h-screen bg-alrosa-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Эксклюзивная коллекция</h1>
          <p className="text-alrosa-gray font-light text-sm md:text-base leading-relaxed">
            Уникальные произведения высокого ювелирного искусства, созданные в единственном экземпляре. 
            Каждое изделие обладает неповторимой историей и характером.
          </p>
          
          <div className="mt-10 flex justify-center space-x-4">
            <button 
              onClick={() => setCountry('RU')}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-colors duration-300 border-b-2 ${country === 'RU' ? 'border-alrosa-dark text-alrosa-dark' : 'border-transparent text-alrosa-gray hover:text-alrosa-dark'}`}
            >
              Россия
            </button>
            <button 
              onClick={() => setCountry('UAE')}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-colors duration-300 border-b-2 ${country === 'UAE' ? 'border-alrosa-dark text-alrosa-dark' : 'border-transparent text-alrosa-gray hover:text-alrosa-dark'}`}
            >
              ОАЭ
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {EXCLUSIVES.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <Link to={`/exclusive/${item.id}`} className="block">
                <div className="relative aspect-[4/5] bg-white overflow-hidden mb-6">
                  {item.reserved && (
                    <div className="absolute top-4 right-4 z-20 bg-black/80 text-white text-[10px] tracking-widest uppercase px-3 py-1 backdrop-blur-sm">
                      Зарезервировано
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${item.reserved ? 'opacity-80 grayscale-[30%]' : ''}`}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-2 text-alrosa-dark">{item.name}</h3>
                  <p className="text-alrosa-accent text-sm tracking-widest mb-4">{item.carat}</p>
                  <p className="text-alrosa-gray text-xs tracking-wider uppercase mb-6">{item.branch}</p>
                  <button 
                    className={`w-full py-3 border text-xs tracking-widest uppercase transition-colors duration-300 ${
                      item.reserved 
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'border-alrosa-dark text-alrosa-dark hover:bg-alrosa-dark hover:text-white'
                    }`}
                    disabled={item.reserved}
                  >
                    {item.reserved ? 'Записаться в лист ожидания' : 'Записаться на примерку'}
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
