import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ExclusiveCatalog } from './pages/ExclusiveCatalog';
import { ItemDetails } from './pages/ItemDetails';
import { Catalog } from './pages/Catalog';
import { Diamonds } from './pages/Diamonds';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-alrosa-dark bg-alrosa-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jewelry" element={<Catalog />} />
            <Route path="/diamonds" element={<Diamonds />} />
            <Route path="/exclusive" element={<ExclusiveCatalog />} />
            <Route path="/exclusive/:id" element={<ItemDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
