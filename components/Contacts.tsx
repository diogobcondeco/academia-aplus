import AcademiaName from "./AcademiaName";
import SocialNetworks from "./SocialNetworks";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function Contacts() {
  return (
    <Wrapper>
      <Title text="Contactos" />
      <div className="flex flex-col w-full gap-6">
        {/* Top row: text + contact info */}
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Left side - Text */}
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl text-gray-700">
              A {<AcademiaName />} encontra-se aberta de segunda a sexta-feira,
              das 7h30 às 19h30, para garantir que cada aluno encontra o horário
              que melhor se adapta às suas necessidades, e ao sábado das 9h às
              13h, apenas se existirem explicações previamente marcadas.
            </p>
          </div>

          {/* Right side - Contact info */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* Address */}
            <p className="text-lg md:text-xl text-gray-700">
              <b>Morada:</b>{" "}
              <a
                href="https://maps.app.goo.gl/XdwXHn8m8KxDwDW17"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Rua General Humberto Delgado nº15 2600-154 Vila Franca de Xira
              </a>
            </p>

            {/* Phone */}
            <p className="text-lg md:text-xl text-gray-700">
              <b>Telefone:</b>{" "}
              <a href="tel:263209100" className="underline">
                263 209 100
              </a>
            </p>

            {/* Email */}
            <p className="text-lg md:text-xl text-gray-700">
              <b>Email:</b>{" "}
              <a
                href="mailto:geralacademiaamais@gmail.com"
                className="underline"
              >
                geralacademiaamais@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom row: Map full width */}
        <div className="w-full h-64 md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.8691421398221!2d-8.997465849215754!3d38.95455789601737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1927e997635b0f%3A0x9f8a870ba3bd0dab!2sR.%20Gen.%20Humberto%20Delgado%2015%2C%202600-048%20Vila%20Franca%20de%20Xira!5e0!3m2!1sen!2spt!4v1757765576185!5m2!1sen!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
}
