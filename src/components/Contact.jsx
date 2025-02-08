import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 min-h-[80vh] flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl sm:text-3xl font-serif my-4">Contato</h2>
      <p className="text-lg mb-4">
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
    </div>
  );
}
