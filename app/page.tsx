import Banner from "@/components/Banner";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <About />
      <Values />
      <Services />
      <Schedule />
    </div>
  );
}
