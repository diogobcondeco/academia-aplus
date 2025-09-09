import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Bubble from "./Bubble";

export default function Values() {
  const values = [
    "Confiança",
    "Dedicação",
    "Exigência com simpatia",
    "Motivação",
    "Autoestima",
    "Autonomia",
  ];

  return (
    <Wrapper>
      <Title text="Valores" />
      <p className="text-lg text-gray-700 mb-4">
        Na {<AcademiaName />}, valorizamos:
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {values.map((value) => (
          <Bubble
            key={value}
            text={value}
            style={{ backgroundColor: "#d7f2c6", color: "#506642" }}
          />
        ))}
      </div>
      <p className="text-lg text-gray-700">
        Acreditamos que esses valores são essenciais para o sucesso académico e
        pessoal dos nossos alunos.
      </p>
    </Wrapper>
  );
}
