import ItemsSection from "./ItemsSection";

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
    <ItemsSection
      title="Valores"
      description="Acreditamos que estes valores são essenciais para alcançar o sucesso escolar e pessoal dos nossos alunos."
      items={values}
    />
  );
}
