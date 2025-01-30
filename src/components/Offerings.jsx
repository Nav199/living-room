import React from "react";
import img from '../img/IMG_3.jpeg'; // Corrigido o caminho para a importação correta

export default function Offerings() {
  return (
    <div className="bg-cover bg-center custom-bg h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">O que oferecemos</h2>
        <p className="text-lg mb-4">
          Nosso objetivo é proporcionar um ambiente acolhedor para reforço e
          acompanhamento escolar. Oferecemos:
        </p>
        <ul className="list-disc text-left px-5 space-y-2">
          <li>Atividades personalizadas de acordo com a necessidade de cada aluno;</li>
          <li>Materiais didáticos inovadores;</li>
          <li>Acompanhamento individualizado;</li>
          <li>Espaço lúdico para aprendizado criativo.</li>
        </ul>
      </div>
    </div>
  );
}
