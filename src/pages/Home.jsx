import React from "react";

export default function Home() {
  return (
    <div className="text-center px-4 sm:px-6 md:px-8 py-8">
      <h2 className="text-2xl font-bold">Bem-vindo à Sala de Reforço</h2>
      <p className="mt-2 text-lg">
        Apoio educacional para alunos com dificuldades de aprendizado.
      </p>
      {/* Seção de fundo */}
      <div className="bg-cover bg-center custom-bg h-screen flex items-center justify-center custom-bg"></div>
    </div>
  );
}
