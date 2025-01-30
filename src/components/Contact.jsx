import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-center text-2xl font-serif my-4">Contato</h2>
      <p className="text-center text-lg mb-4">
        Preencha o formulário abaixo ou{" "}
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
      <div className="bg-cover bg-center custom-bg h-screen flex items-center justify-center custom-bg"></div>
    </div>
  );
}
