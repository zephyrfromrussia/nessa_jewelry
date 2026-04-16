import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Clock, MapPin, Sparkles } from 'lucide-react';
import { AppointmentBooking } from '../components/AppointmentBooking';

const MOCK_ITEM = {
  id: 'e1',
  name: 'Кольцо с желтым бриллиантом',
  carat: '5.2 ct',
  cut: 'Радиант',
  color: 'Fancy Vivid Yellow',
  clarity: 'VVS1',
  price: 'По запросу',
  images: [
    'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=1200&auto=format&fit=crop'
  ],
  branch: 'Москва, ул. Петровка, 10',
  description: 'Уникальное кольцо, в центре которого сияет редчайший желтый бриллиант фантазийного насыщенного цвета. Огранка "Радиант" максимально раскрывает глубину оттенка, создавая невероятную игру света. Создано в единственном экземпляре.',
  reserved: false
};

export function ItemDetails() {
  const { id } = useParams();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // In real app, we'd fetch item by id
  console.log("Viewing item", id);

  return (
    <div className="min-h-screen bg-alrosa-white pt-24 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/exclusive" className="inline-flex items-center text-xs tracking-widest text-alrosa-gray hover:text-alrosa-dark transition-colors mb-12 uppercase">
          <ChevronLeft size={16} className="mr-2" /> Назад в каталог
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Images */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-white"
            >
              <img src={MOCK_ITEM.images[0]} alt={MOCK_ITEM.name} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Details */}
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif text-alrosa-dark mb-4">{MOCK_ITEM.name}</h1>
              <p className="text-alrosa-accent tracking-widest uppercase text-sm mb-8">{MOCK_ITEM.carat} | {MOCK_ITEM.cut}</p>
              
              <div className="prose prose-sm text-alrosa-gray font-light leading-relaxed mb-10">
                <p>{MOCK_ITEM.description}</p>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-alrosa-gray tracking-wider">Цвет</span>
                  <span className="font-medium">{MOCK_ITEM.color}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-alrosa-gray tracking-wider">Чистота</span>
                  <span className="font-medium">{MOCK_ITEM.clarity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-alrosa-gray tracking-wider">Наличие</span>
                  <span className="flex items-center font-medium">
                    <MapPin size={14} className="mr-2 text-alrosa-accent" />
                    {MOCK_ITEM.branch}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                disabled={MOCK_ITEM.reserved}
                className={`w-full py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  MOCK_ITEM.reserved 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-alrosa-dark text-white hover:bg-alrosa-accent'
                }`}
              >
                {MOCK_ITEM.reserved ? 'Зарезервировано' : 'Записаться на примерку'}
              </button>

              <div className="mt-8 space-y-4 text-xs text-alrosa-gray tracking-wider">
                <div className="flex items-start">
                  <Sparkles size={16} className="mr-3 shrink-0" />
                  <p>Данное изделие существует в единственном экземпляре (One-of-a-kind).</p>
                </div>
                <div className="flex items-start">
                  <Clock size={16} className="mr-3 shrink-0" />
                  <p>Резерв устанавливается на время примерки + 2 часа.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AppointmentBooking 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        item={MOCK_ITEM} 
      />
    </div>
  );
}
