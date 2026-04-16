import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-alrosa-dark">
      {/* Background Image / Video Mock */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2574&auto=format&fit=crop" 
          alt="Luxury Jewelry" 
          className="w-full h-full object-cover object-center opacity-70 animate-image-reveal"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.3em] font-medium text-alrosa-accent mb-6 uppercase"
        >
          Новая коллекция 2026
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 leading-tight tracking-wide"
        >
          Искусство сиять
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-alrosa-dark text-xs tracking-[0.2em] font-semibold hover:bg-alrosa-accent hover:text-white transition-colors duration-500 uppercase">
            Смотреть коллекцию
          </button>
          <button className="w-full sm:w-auto px-10 py-4 border border-white text-white text-xs tracking-[0.2em] font-semibold hover:bg-white hover:text-alrosa-dark transition-colors duration-500 uppercase">
            Записаться в шоурум
          </button>
        </motion.div>
      </div>
    </section>
  );
}
