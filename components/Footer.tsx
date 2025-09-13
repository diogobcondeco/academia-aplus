import SocialNetworks from "./SocialNetworks";
import Developer from "./Developer";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-[#506642] text-white font-bold py-8 px-4 mt-16 flex flex-col items-center gap-4">
      {/* Social icons */}
      <SocialNetworks />

      {/* Developer & Copyright info */}
      <div className="text-center space-y-1">
        <Developer />
        <Copyright />
      </div>
    </footer>
  );
}
