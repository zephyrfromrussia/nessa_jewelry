import { useState } from 'react';
import { motion } from 'framer-motion';

export function Concierge() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    idea: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-alrosa-white pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-alrosa-dark mb-6">Создать украшение</h1>
          <p className="text-alrosa-gray font-light leading-relaxed">
            Консьерж-сервис NESSA DIAMONDS воплотит ваши самые смелые идеи. 
            От выбора уникального камня до финальной полировки оправы — мы создадим украшение, 
            которое станет вашей семейной реликвией.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Info & Images */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-[4/3] relative overflow-hidden bg-alrosa-lightGray"
            >
              <img 
                src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1200&auto=format&fit=crop" 
                alt="Ювелирный эскиз" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 border-[16px] border-alrosa-white/20"></div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-3 text-alrosa-dark">1. Встреча и эскиз</h3>
                <p className="text-sm text-alrosa-gray font-light">Мы обсуждаем ваши пожелания и создаем серию уникальных эскизов.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-alrosa-dark">2. Подбор камня</h3>
                <p className="text-sm text-alrosa-gray font-light">Наши геммологи находят идеальный бриллиант под вашу идею.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-alrosa-dark">3. 3D-моделирование</h3>
                <p className="text-sm text-alrosa-gray font-light">Создаем точную цифровую копию для утверждения всех деталей.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3 text-alrosa-dark">4. Рождение шедевра</h3>
                <p className="text-sm text-alrosa-gray font-light">Мастера воплощают эскиз в золоте и платине.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 sticky top-24">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif text-alrosa-dark mb-4">Заявка принята</h2>
                  <p className="text-alrosa-gray font-light">
                    Наш консьерж свяжется с вами в ближайшее время для обсуждения деталей вашего идеального украшения.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-serif text-alrosa-dark mb-8">Оставить заявку</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] tracking-widest text-alrosa-gray uppercase mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-alrosa-dark transition-colors bg-transparent"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] tracking-widest text-alrosa-gray uppercase mb-2">Телефон</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-alrosa-dark transition-colors bg-transparent"
                          value={formState.phone}
                          onChange={e => setFormState({...formState, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-widest text-alrosa-gray uppercase mb-2">E-mail</label>
                        <input 
                          type="email" 
                          required
                          className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-alrosa-dark transition-colors bg-transparent"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest text-alrosa-gray uppercase mb-2">Ориентировочный бюджет</label>
                      <select 
                        className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-alrosa-dark transition-colors bg-transparent appearance-none rounded-none"
                        value={formState.budget}
                        onChange={e => setFormState({...formState, budget: e.target.value})}
                      >
                        <option value="">Не определен</option>
                        <option value="1M-3M">1 000 000 - 3 000 000 ₽</option>
                        <option value="3M-5M">3 000 000 - 5 000 000 ₽</option>
                        <option value="5M+">От 5 000 000 ₽</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest text-alrosa-gray uppercase mb-2">Опишите вашу идею</label>
                      <textarea 
                        rows={4}
                        className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-alrosa-dark transition-colors bg-transparent resize-none"
                        placeholder="Какое украшение вы хотите создать?"
                        value={formState.idea}
                        onChange={e => setFormState({...formState, idea: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 mt-4 bg-alrosa-dark text-white text-xs tracking-[0.2em] uppercase hover:bg-alrosa-accent transition-colors duration-300"
                    >
                      Отправить заявку
                    </button>
                    
                    <p className="text-[10px] text-alrosa-gray text-center mt-4">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
