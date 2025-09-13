import SocialNetworks from "./SocialNetworks";
import Developer from "./Developer";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-[#506642] text-white font-bold p-6 flex flex-col items-center gap-4">
      {/* Social icons */}
      <SocialNetworks />

      {/* Developer & Copyright info */}
      <div className="text-center text-sm space-y-1">
        <Developer />
        <Copyright />
      </div>
    </footer>
  );
}
