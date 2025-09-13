import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";
import { Icon } from "@iconify/react";

export default function Services() {
  const services = [
    {
      text: "Explicações para o 2º e 3º ciclos",
      icon: "mdi:book-open-variant",
    },
    {
      text: "Apoio ao estudo",
      icon: "mdi:school",
    },
    {
      text: "Preparação de exames nacionais",
      icon: "mdi:file-document-box-multiple",
    },
    {
      text: "Métodos de estudo e organização",
      icon: "mdi:calendar-check",
    },
    {
      text: "Apoio online",
      icon: "mdi:laptop",
    },
    {
      text: "Programas especiais nas férias de verão",
      icon: "mdi:beach",
    },
  ];

  return (
    <section
      className="text-white py-16 px-6 text-center"
      style={{ backgroundColor: "#506642" }}
    >
      <Wrapper>
        <Title text="Serviços" />
        <p className="text-lg md:text-xl mb-6">
          Na <AcademiaName />, oferecemos uma variedade de serviços para atender
          às necessidades dos nossos alunos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.text}
              className=" bg-white p-6 rounded-lg shadow hover:shadow-xl transition-transform hover:scale-105 min-h-[160px] flex flex-col items-center justify-center text-center"
            >
              <Icon
                icon={service.icon}
                className="text-3xl md:text-4xl mb-3"
                style={{ color: "#506642" }}
              />
              <p
                className="text-lg md:text-xl font-semibold"
                style={{ color: "#506642" }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
