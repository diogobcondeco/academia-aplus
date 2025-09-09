import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function Services() {
  return (
    <Wrapper>
      <Title text="Serviços" />
      <p className="text-lg text-gray-700">
        Na {<AcademiaName />}, oferecemos uma variedade de serviços para atender
        às necessidades dos nossos alunos.
      </p>
      <p className="text-lg text-gray-700">
        Entre os nossos serviços, destacam-se: explicações para o 2º e 3º
        ciclos, explicações em grupo e individuais, apoio ao estudo e preparação
        para exames nacionais do 9º ano.
      </p>
      <p className="text-lg text-gray-700">
        Durante as férias de verão, também oferecemos programas especiais para
        ajudar os alunos a consolidar os conhecimentos adquiridos ao longo do
        ano letivo.
      </p>
    </Wrapper>
  );
}
