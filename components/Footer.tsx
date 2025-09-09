"use client";

import { Icon } from "@iconify/react";
import AcademiaName from "./AcademiaName";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="text-white font-bold p-6 flex flex-col gap-6 mt-6"
      style={{ backgroundColor: "#506642" }}
    >
      {/* Footer Attribution and Copyright */}
      <div className="text-center flex flex-col gap-2">
        <div>
          <a
            href="https://www.instagram.com/academia_a_mais"
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <Icon icon={"mdi:instagram"} className="text-2xl" />
            academia_a_mais
          </a>
        </div>
        <div className="text-sm">
          Feito por{" "}
          <a
            href="https://diogobcondeco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary link"
          >
            diogobcondeco.com
          </a>
        </div>
        <div className="text-sm">
          &copy; {currentYear} {<AcademiaName />}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
