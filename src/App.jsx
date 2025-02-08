import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routers/AppRoutes";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <header className="bg-sky-400 py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/" className="text-lg sm:text-xl font-serif">
              Sala do Reforço e Acompanhamento Escolar
            </Link>

            {/* Menu para Desktop */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/offerings" className="text-gray-800 hover:text-gray-600 font-serif">O que é oferecido</Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-serif">Contato</Link>
            </nav>

            {/* Botão de menu para Mobile */}
            <button className="md:hidden text-gray-800 text-2xl" onClick={toggleMenu}>
              ☰
            </button>
          </div>

          {/* Menu para Celular */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-md flex flex-col">
              <Link to="/offerings" className="block py-2 px-4 border-b">O que é oferecido</Link>
              <Link to="/contact" className="block py-2 px-4">Contato</Link>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto py-8 px-4">
          <AppRoutes />
        </main>

        {/* Footer */}
        <footer className="bg-sky-500 py-3 text-center">
          <small>Aprender é um ato de coragem. Ensinar é um ato de amor.</small>
        </footer>
      </div>
    </Router>
  );
}
