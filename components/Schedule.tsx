import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function Schedule() {
  return (
    <Wrapper>
      <Title text="Horário" />
      <p className="text-lg text-gray-700">
        {<AcademiaName />} encontra-se aberta de segunda a sexta-feira, das 7h30
        às 19h30, para garantir que cada aluno encontra o horário que melhor se
        adapta às suas necessidades.
      </p>
    </Wrapper>
  );
}
