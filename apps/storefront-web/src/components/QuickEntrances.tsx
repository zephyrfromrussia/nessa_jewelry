import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Кольца',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66150ce8?q=80&w=800&auto=format&fit=crop',
    link: '/jewelry/rings'
  },
  {
    title: 'Серьги',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    link: '/jewelry/earrings'
  },
  {
    title: 'Колье',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7ca066b?q=80&w=800&auto=format&fit=crop',
    link: '/jewelry/necklaces'
  },
  {
    title: 'Браслеты',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    link: '/jewelry/bracelets'
  }
];

export function QuickEntrances() {
  return (
    <section className="py-24 bg-alrosa-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-wide">
          Выберите своё украшение
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.link}
              className="group block relative overflow-hidden bg-white aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                <span className="text-white text-sm md:text-base font-medium tracking-[0.2em] uppercase">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
