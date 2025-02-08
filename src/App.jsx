import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Offerings from "./components/Offerings";
import Contact from "./components/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <header className="bg-sky-400 py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-lg font-serif">
            Sala do Reforço
          </Link>

          {/* Botão do menu para Mobile */}
          <button className="md:hidden text-gray-800 text-2xl" onClick={toggleMenu}>
            ☰
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/offerings" className="text-gray-800 hover:text-gray-600 font-serif">O que é oferecido</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-serif">Contato</Link>
          </nav>
        </div>

        {/* Menu Mobile (Tela Pequena) */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col text-center">
            <Link to="/offerings" className="block py-2 px-4 border-b">O que é oferecido</Link>
            <Link to="/contact" className="block py-2 px-4">Contato</Link>
          </div>
        )}
      </header>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-sky-500 py-2 text-center">
        <small>Aprender é um ato de coragem. Ensinar é um ato de amor.</small>
      </footer>
    </Router>
  );
}