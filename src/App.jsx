import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routers/AppRoutes";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header */}
        <header className="bg-sky-400 py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
            <h1 className="text-xl font-serif">Sala de Reforço e Acompanhamento Escolar</h1>
            <nav>
              <Link to="/offerings" className="mx-4 text-gray-800 hover:text-gray-600">O que é oferecido</Link>
              <Link to="/contact" className="mx-4 text-gray-800 hover:text-gray-600">Contato</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 md:px-8">
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
