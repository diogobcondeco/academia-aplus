import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function About() {
  const paragraphs = [
    <>
      A <AcademiaName /> é um centro de explicações localizado em Vila Franca de
      Xira dedicado ao apoio escolar.
    </>,
    <>
      Acreditamos que cada aluno tem o seu próprio ritmo e forma de aprender. O
      nosso objetivo é apoiar, motivar e orientar para que cada conquista seja
      alcançada com confiança.
    </>,
    <>
      Com um ambiente acolhedor e métodos adaptados, ajudamos os alunos a
      organizarem-se, ganharem autonomia e desenvolverem o gosto pelo estudo.
    </>,
    <>
      Aqui, cada pequeno passo conta – porque sabemos que juntos, o caminho para
      o sucesso torna-se mais leve e positivo.
    </>,
  ];
  return (
    <Wrapper className="px-4 lg:px-0">
      <Title text="Sobre Nós" />

      <div className="space-y-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-lg md:text-xl text-gray-700 text-left md:text-justify leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>
    </Wrapper>
  );
}
