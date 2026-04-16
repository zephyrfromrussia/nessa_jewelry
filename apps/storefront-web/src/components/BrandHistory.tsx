import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function BrandHistory() {
  return (
    <section className="py-24 bg-alrosa-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1599643478514-4a5700200806?q=80&w=1200&auto=format&fit=crop" 
                alt="Процесс создания украшений" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </motion.div>
            {/* Decorative background element */}
            <div className="absolute -top-8 -left-8 w-full h-full border border-alrosa-gray/30 z-0"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xs tracking-[0.3em] text-alrosa-accent uppercase mb-6">О бренде</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
                Наследие,<br />высеченное в камне
              </h3>
              
              <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-12 max-w-lg">
                <p>
                  NESSA DIAMONDS — это не просто ювелирный бренд. Это история о том, как миллионы лет эволюции Земли превращаются в совершенство в руках наших мастеров.
                </p>
                <p>
                  Каждый наш бриллиант имеет безупречную родословную. Мы контролируем весь путь: от бережной добычи алмаза до его финальной огранки и создания оправы. Это гарантирует не только высочайшее качество, но и этичность происхождения каждого камня.
                </p>
              </div>

              <Link 
                to="/about" 
                className="inline-block pb-1 border-b border-alrosa-accent text-alrosa-accent text-xs tracking-widest uppercase hover:text-white hover:border-white transition-colors duration-300"
              >
                Узнать больше о компании
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
