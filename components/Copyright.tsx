"use client";

import AcademiaName from "./AcademiaName";

export default function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      &copy; {currentYear} <AcademiaName />. Todos os direitos reservados.
    </div>
  );
}
