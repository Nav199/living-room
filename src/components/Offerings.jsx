import React from "react";

export default function Offerings() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center custom-bg">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">O que oferecemos</h2>
        <p className="text-lg mb-4 font-serif">
          Nosso objetivo é proporcionar um ambiente acolhedor para reforço e acompanhamento escolar. Oferecemos:
        </p>
        <ul className="list-disc text-left px-5 space-y-2 font-serif">
          <li>Reforço em leitura, escrita e disciplina em dificuldade;</li>
          <li>Acompanhamento diário das atividades escolares;</li>
          <li>Atividades complementares para reforçar o aprendizado;</li>
          <li>Ajuda com pesquisas, trabalhos e produção de cartazes;</li>
          <li>Revisão dos conteúdos em semana de avaliações.</li>
        </ul>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Horários Disponíveis */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Horários Disponíveis:</h3>
            <ul className="list-disc text-left px-5 space-y-2 font-serif">
              <li>Manhã: 08h às 10h (1° ao 9° ano)</li>
              <li>Tarde 13h30min às 15h30min (1° ao 5° ano)</li>
              <li>Tarde 15h30min às 17h30min (6° ao 9° ano)</li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Formas de Pagamento:</h3>
            <ul className="list-disc text-left px-5 space-y-2 font-serif">
              <li>📌 À vista – desconto de 5%</li>
              <li>📌 Parcelado – Em até 12 vezes sem juros no boleto bancário.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Contrato:</h3>
            <p className="font-serif">📑 Contrato Anual ou Semestral</p>
            <p className="font-serif">✍️ Elaborado pela nossa assessoria jurídica para garantir segurança, clareza e compromisso.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
