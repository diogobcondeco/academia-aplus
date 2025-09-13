import Banner from "@/components/Banner";
import About from "@/components/About";
import SignUp from "@/components/SignUp";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Banner />
      <About />
      <SignUp />
      <Values />
      <Services />
      <Contacts />
    </div>
  );
}
