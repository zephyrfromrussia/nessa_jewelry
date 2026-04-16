import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ExclusiveCatalog } from './pages/ExclusiveCatalog';
import { ItemDetails } from './pages/ItemDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-alrosa-dark bg-alrosa-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exclusive" element={<ExclusiveCatalog />} />
          <Route path="/exclusive/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
