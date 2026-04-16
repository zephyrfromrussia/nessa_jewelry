import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="min-h-screen bg-alrosa-white">
      {/* Hero Banner */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-alrosa-dark pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2574&auto=format&fit=crop" 
            alt="Ювелирное мастерство" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-light mb-6 tracking-wide"
          >
            Искусство совершенства
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs md:text-sm tracking-[0.3em] font-medium uppercase text-alrosa-accent"
          >
            Манифест NESSA DIAMONDS
          </motion.p>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-alrosa-dark mb-10 leading-relaxed">
            "Мы не просто продаем бриллианты.<br className="hidden md:block"/>Мы сохраняем историю планеты."
          </h2>
          <p className="text-base md:text-lg text-alrosa-gray font-light leading-relaxed max-w-3xl mx-auto">
            Наша миссия — раскрыть истинную красоту природных алмазов через безупречную русскую огранку. 
            Каждое изделие NESSA DIAMONDS рождается в симбиозе многовековых традиций и передовых технологий.
            Мы верим, что подлинная роскошь — это сочетание исключительного качества, этичности и прозрачности на каждом этапе.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-alrosa-lightGray py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Value 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="px-6"
            >
              <h3 className="text-xs tracking-[0.2em] text-alrosa-accent uppercase mb-6 font-medium">Безупречная огранка</h3>
              <p className="font-serif text-2xl mb-4">Русский стандарт</p>
              <p className="text-alrosa-gray text-sm leading-relaxed font-light">
                Наши мастера-огранщики наследуют легендарную школу огранки. Идеальные пропорции и симметрия обеспечивают максимальное возвращение света.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-6 border-y md:border-y-0 md:border-x border-gray-200 py-12 md:py-0"
            >
              <h3 className="text-xs tracking-[0.2em] text-alrosa-accent uppercase mb-6 font-medium">100% Этичность</h3>
              <p className="font-serif text-2xl mb-4">Прозрачный путь</p>
              <p className="text-alrosa-gray text-sm leading-relaxed font-light">
                Мы знаем историю каждого камня с момента его добычи. Строгое соблюдение Кимберлийского процесса и экологических стандартов.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-6"
            >
              <h3 className="text-xs tracking-[0.2em] text-alrosa-accent uppercase mb-6 font-medium">Эксклюзивность</h3>
              <p className="font-serif text-2xl mb-4">Уникальный дизайн</p>
              <p className="text-alrosa-gray text-sm leading-relaxed font-light">
                Коллекции High Jewelry создаются в единственном экземпляре. Мы подчеркиваем характер редчайших камней сложной архитектурой оправ.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599643477874-c5a5c11f86fc?q=80&w=1200&auto=format&fit=crop" 
              alt="Мастер за работой" 
              className="w-full h-[600px] object-cover grayscale-[30%]"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-lg">
            <h2 className="text-4xl font-serif mb-8 text-alrosa-dark">От эскиза до воплощения</h2>
            <p className="text-alrosa-gray font-light leading-relaxed mb-10">
              Процесс создания эксклюзивного украшения NESSA может занимать от нескольких месяцев до года. Ювелиры, закрепщики и полировщики объединяют свои таланты, чтобы создать шедевр, который станет вашей фамильной ценностью.
            </p>
            <div className="pt-8 border-t border-gray-200">
              <p className="font-serif text-2xl text-alrosa-dark italic">Главный ювелир бренда</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
