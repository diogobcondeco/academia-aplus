import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Bubble from "./Bubble";

export default function Values() {
  const values = [
    "Confiança",
    "Dedicação",
    "Respeito",
    "Motivação",
    "Autoestima",
    "Autonomia",
  ];

  return (
    <Wrapper>
      <Title text="Valores" />
      <p className="text-lg text-gray-700 mb-4">
        Acreditamos que estes valores são essenciais para alcançar o sucesso
        escolar e pessoal dos nossos alunos.
      </p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <Bubble
            key={value}
            text={value}
            style={{ backgroundColor: "#d7f2c6", color: "#506642" }}
          />
        ))}
      </div>
    </Wrapper>
  );
}
