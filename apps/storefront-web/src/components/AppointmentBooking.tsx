import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User } from 'lucide-react';

const MANAGERS = [
  { id: 'm1', name: 'Екатерина В.', rating: '4.9', expert: 'Бриллианты' },
  { id: 'm2', name: 'Анна С.', rating: '5.0', expert: 'Цветные камни' },
  { id: 'm3', name: 'Дмитрий К.', rating: '4.8', expert: 'Высокое искусство' }
];

const TIME_SLOTS = ['10:00', '12:00', '14:00', '16:00', '18:00'];

export function AppointmentBooking({ isOpen, onClose, item }: { isOpen: boolean, onClose: () => void, item: any }) {
  const [step, setStep] = useState(1);
  const [manager, setManager] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-alrosa-dark/80 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 text-alrosa-gray hover:text-alrosa-dark transition-colors"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Left Panel - Image */}
          <div className="hidden md:block w-1/2 bg-alrosa-lightGray">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
          </div>

          {/* Right Panel - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-serif mb-2">Запись на примерку</h2>
              <p className="text-xs text-alrosa-gray tracking-widest uppercase">
                {item.branch}
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-8 flex-grow">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-alrosa-gray mb-4 flex items-center">
                    <User size={14} className="mr-2" /> Выберите эксперта
                  </label>
                  <div className="space-y-3">
                    {MANAGERS.map(m => (
                      <button 
                        key={m.id}
                        onClick={() => setManager(m.id)}
                        className={`w-full flex justify-between items-center p-4 border transition-colors ${manager === m.id ? 'border-alrosa-dark bg-alrosa-dark/5' : 'border-gray-200 hover:border-alrosa-gray'}`}
                      >
                        <span className="font-serif text-lg">{m.name}</span>
                        <span className="text-xs text-alrosa-gray tracking-wider">{m.expert}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setStep(2)}
                  disabled={!manager}
                  className="w-full py-4 bg-alrosa-dark text-white text-xs tracking-[0.2em] uppercase disabled:bg-gray-200 disabled:text-gray-400 hover:bg-alrosa-accent transition-colors"
                >
                  Далее
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 flex-grow">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-alrosa-gray mb-4 flex items-center">
                    <Calendar size={14} className="mr-2" /> Выберите дату и время
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {['Сегодня', 'Завтра', 'Среда'].map((d, i) => (
                      <button 
                        key={i}
                        onClick={() => setDate(d)}
                        className={`p-3 text-xs tracking-wider border transition-colors ${date === d ? 'border-alrosa-dark bg-alrosa-dark text-white' : 'border-gray-200 hover:border-alrosa-gray text-alrosa-dark'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((t, i) => (
                      <button 
                        key={i}
                        onClick={() => setTime(t)}
                        className={`p-3 text-xs border transition-colors ${time === t ? 'border-alrosa-dark bg-alrosa-dark/5' : 'border-gray-200 hover:border-alrosa-gray text-alrosa-dark'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 border border-gray-200 text-alrosa-dark text-xs tracking-widest uppercase hover:border-alrosa-dark transition-colors"
                  >
                    Назад
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    disabled={!date || !time}
                    className="w-2/3 py-4 bg-alrosa-dark text-white text-xs tracking-[0.2em] uppercase disabled:bg-gray-200 disabled:text-gray-400 hover:bg-alrosa-accent transition-colors"
                  >
                    Подтвердить
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-10">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif">Запись подтверждена</h3>
                <p className="text-alrosa-gray text-sm leading-relaxed max-w-xs">
                  Ждём вас {date.toLowerCase()} в {time}.<br/>
                  Изделие зарезервировано для вас.<br/>
                  Резерв автоматически снимется через 2 часа после окончания примерки.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-8 px-10 py-4 bg-alrosa-dark text-white text-xs tracking-[0.2em] uppercase hover:bg-alrosa-accent transition-colors"
                >
                  Вернуться в каталог
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
