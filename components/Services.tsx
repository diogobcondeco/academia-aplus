import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Bubble from "./Bubble";

export default function Services() {
  const services = [
    "Explicações para o 2º e 3º ciclos",
    "Explicações em grupo",
    "Explicações individuais",
    "Apoio ao estudo",
    "Preparação para exames nacionais do 9º ano",
    "Programas especiais nas férias de verão",
  ];

  return (
    <Wrapper>
      <Title text="Serviços" />
      <p className="text-lg text-gray-700 mb-4">
        Na {<AcademiaName />}, oferecemos uma variedade de serviços para atender
        às necessidades dos nossos alunos.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {services.map((service) => (
          <Bubble
            key={service}
            text={service}
            style={{ backgroundColor: "#d7f2c6", color: "#506642" }}
          />
        ))}
      </div>
    </Wrapper>
  );
}
