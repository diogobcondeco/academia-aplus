import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function Values() {
  return (
    <Wrapper>
      <Title text="Valores" />
      <p className="text-lg text-gray-700">
        Na {<AcademiaName />}, valorizamos a confiança, dedicação, exigência com
        simpatia, motivação, autoestima e autonomia.
      </p>
      <p className="text-lg text-gray-700">
        Acreditamos que esses valores são essenciais para o sucesso académico e
        pessoal dos nossos alunos.
      </p>
    </Wrapper>
  );
}
