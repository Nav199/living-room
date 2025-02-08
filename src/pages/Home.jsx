import React from "react";

export default function Home() {
  return (
    <div
      className="min-h-[50vh] md:min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-[url(../src/img/IMG.jpeg)]"
    >
      <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg text-center max-w-xs md:max-w-md mx-4">
        <h2 className="text-lg md:text-xl font-bold">Bem-vindo à Sala de Reforço</h2>
        <p className="mt-2 text-sm md:text-base font-serif">
          Apoio educacional para alunos com dificuldades de aprendizado.
        </p>
      </div>
    </div>
  );
}