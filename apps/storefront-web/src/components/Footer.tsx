import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-alrosa-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Subscription */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.1em] mb-6">NESSA DIAMONDS</h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых коллекциях и закрытых мероприятиях.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="ВАШ E-MAIL" 
                className="bg-transparent border-b border-gray-600 pb-2 text-xs tracking-widest uppercase focus:outline-none focus:border-white transition-colors"
              />
              <button type="button" className="text-left text-xs tracking-widest uppercase text-alrosa-accent hover:text-white transition-colors mt-2">
                Подписаться
              </button>
            </form>
          </div>

          {/* Column 2: Каталог */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-medium">УКРАШЕНИЯ</h4>
            <ul className="space-y-4 text-xs tracking-wider text-gray-400">
              <li><Link to="/jewelry/rings" className="hover:text-white transition-colors">Кольца</Link></li>
              <li><Link to="/jewelry/earrings" className="hover:text-white transition-colors">Серьги</Link></li>
              <li><Link to="/jewelry/necklaces" className="hover:text-white transition-colors">Колье</Link></li>
              <li><Link to="/jewelry/bracelets" className="hover:text-white transition-colors">Браслеты</Link></li>
              <li><Link to="/exclusive" className="hover:text-white transition-colors">Эксклюзив</Link></li>
            </ul>
          </div>

          {/* Column 3: О бренде */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-medium">О БРЕНДЕ</h4>
            <ul className="space-y-4 text-xs tracking-wider text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Журнал</Link></li>
              <li><Link to="/responsibility" className="hover:text-white transition-colors">Ответственность</Link></li>
              <li><Link to="/diamonds-path" className="hover:text-white transition-colors">Путь бриллианта</Link></li>
            </ul>
          </div>

          {/* Column 4: Контакты */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 font-medium">КОНТАКТЫ</h4>
            <ul className="space-y-4 text-xs tracking-wider text-gray-400">
              <li><a href="tel:88000000000" className="hover:text-white transition-colors">8 (800) 000-00-00</a></li>
              <li><a href="mailto:info@nessadiamonds.com" className="hover:text-white transition-colors uppercase">info@nessadiamonds.com</a></li>
              <li className="pt-4 flex space-x-4">
                <a href="#" className="hover:text-alrosa-accent transition-colors">VK</a>
                <a href="#" className="hover:text-alrosa-accent transition-colors">Telegram</a>
                <a href="#" className="hover:text-alrosa-accent transition-colors">YouTube</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest text-gray-500 uppercase">
          <p>© {new Date().getFullYear()} NESSA DIAMONDS</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Публичная оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
