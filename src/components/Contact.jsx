import React from "react";
export default function Contact() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-[url(../src/img/IMG.jpeg)]">
      <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg text-center w-full max-w-sm sm:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-lg font-serif mb-4">
          Para mais informações, entre em contato conosco pelos canais abaixo:
        </p>
        <p className="text-gray-700 font-serif">📞 Telefone: (92) 99238-0614</p>
        <p className="text-gray-700 font-serif">📧 Email: contato@reforcoescolar.com</p>
        <p className="text-gray-700 font-serif"> Formulário {" "}
        <a
          href="https://docs.google.com/forms/d/1EkHpB-emlGCjLKWNlWltXKecFKl2aP6xvtSX3MXiimA/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          clique aqui
        </a>{" "}
        para acessar o formulário completo.
        </p>
      </div>
    </div>
  );
}

