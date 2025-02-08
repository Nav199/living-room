import React from "react";
import bgImage from "../img/IMG_3.jpeg"; // Importando a imagem

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center custom-bg" // Aplicando como inline-style
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold">Bem-vindo à Sala de Reforço</h2>
        <p className="mt-2 text-lg font-serif">
          Apoio educacional para alunos com dificuldades de aprendizado.
        </p>
      </div>
    </div>
  );
}
