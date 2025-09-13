import React from "react";
import Title from "./Title";
import Wrapper from "./Wrapper";
import { Icon } from "@iconify/react";

export default function Values() {
  const values = [
    { text: "Confiança", icon: "mdi:hand-heart" },
    { text: "Dedicação", icon: "mdi:timer-sand" },
    { text: "Respeito", icon: "mdi:account-group" },
    { text: "Motivação", icon: "mdi:rocket" },
    { text: "Autoestima", icon: "mdi:star-circle" },
    { text: "Autonomia", icon: "mdi:school-outline" },
  ];

  return (
    <Wrapper className="px-4 lg:px-0">
      <Title text="Valores" />
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Acreditamos que estes valores são essenciais para alcançar o sucesso
        escolar e pessoal dos nossos alunos.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {values.map((value) => (
          <div
            key={value.text}
            className="bg-[#506642] text-white rounded-lg p-4 text-center shadow hover:shadow-lg transition hover:scale-105 min-h-[100px] flex flex-col items-center justify-center gap-2"
          >
            <Icon
              icon={value.icon}
              className="text-white text-3xl md:text-4xl"
            />
            <span className="font-semibold text-lg md:text-xl">
              {value.text}
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
