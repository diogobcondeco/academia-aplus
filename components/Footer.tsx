import SocialNetworks from "./SocialNetworks";
import Developer from "./Developer";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer
      className="text-white font-bold p-6 flex flex-col gap-6 mt-6"
      style={{ backgroundColor: "#506642" }}
    >
      {/* Footer Attribution and Copyright */}
      <div className="text-center flex flex-col gap-2">
        {<SocialNetworks />}
        {<Developer />}
        {<Copyright />}
      </div>
    </footer>
  );
}
