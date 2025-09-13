import Banner from "@/components/Banner";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <About />
      <Values />
      <Services />
      <Contacts />
    </div>
  );
}
