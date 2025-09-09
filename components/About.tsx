import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function About() {
  return (
    <Wrapper>
      <Title text="Sobre nós" />
      <p className="text-lg text-gray-700">
        {<AcademiaName />} é um centro de explicações em Vila Franca de Xira
        dedicado ao apoio escolar.
      </p>
      <p className="text-lg text-gray-700">
        Acreditamos que cada aluna tem potencial para alcançar o sucesso, por
        isso oferecemos explicações e acompanhamento em várias disciplinas,
        sempre com métodos adaptados às suas necessidades.
      </p>
      <p className="text-lg text-gray-700">
        O nosso objetivo é criar um ambiente de confiança, motivação e
        resultados.
      </p>
    </Wrapper>
  );
}
