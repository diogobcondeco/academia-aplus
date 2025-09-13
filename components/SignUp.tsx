import AcademiaName from "./AcademiaName";
import Title from "./Title";

export default function SignUp() {
  return (
    <section
      className="text-white py-16 px-6 text-center"
      style={{ backgroundColor: "#506642" }}
    >
      {<Title text="Pré-Inscrição" />}
      <p className="text-lg md:text-xl mb-8">
        Garanta já o seu lugar na {<AcademiaName />} preenchendo o formulário de
        pré-inscrição.
      </p>
      <a
        href="https://forms.gle/zVu4q2C7Lw9gMMo4A"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-100 transition"
      >
        Preencher Formulário
      </a>
    </section>
  );
}
