import AcademiaName from "./AcademiaName";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function About() {
  return (
    <Wrapper>
      <Title text="Sobre nós" />
      <p className="text-lg text-gray-700">
        A {<AcademiaName />} é um centro de explicações localizado em Vila
        Franca de Xira dedicado ao apoio escolar.
      </p>
      <p className="text-lg text-gray-700">
        Acreditamos que cada aluno tem o seu próprio ritmo e forma de aprender.
        O nosso objetivo é apoiar, motivar e orientar para que cada conquista
        seja alcançada com confiança.
      </p>
      <p className="text-lg text-gray-700">
        Com um ambiente acolhedor e métodos adaptados, ajudamos os alunos a
        organizarem-se, ganharem autonomia e desenvolverem o gosto pelo estudo.
      </p>
      <p className="text-lg text-gray-700">
        Aqui, cada pequeno passo conta – porque sabemos que juntos, o caminho
        para o sucesso torna-se mais leve e positivo.
      </p>
    </Wrapper>
  );
}
