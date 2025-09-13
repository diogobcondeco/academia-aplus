import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Bubble from "./Bubble";

export default function Services() {
  const services = [
    "Explicações para o 2º e 3º ciclos",
    "Apoio ao estudo",
    "Preparação de exames nacionais",
    "Métodos de estudo e organização",
    "Apoio online",
    "Programas especiais nas férias de verão",
  ];

  return (
    <Wrapper>
      <Title text="Serviços" />
      <p className="text-lg md:text-xl text-gray-700 mb-4">
        Na {<AcademiaName />}, oferecemos uma variedade de serviços para atender
        às necessidades dos nossos alunos.
      </p>
      <div className="flex flex-wrap gap-2">
        {services.map((service) => (
          <Bubble
            key={service}
            text={service}
            style={{ backgroundColor: "#506642", color: "#fff" }}
          />
        ))}
      </div>
    </Wrapper>
  );
}
