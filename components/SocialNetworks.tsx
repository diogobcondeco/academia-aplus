import { Icon } from "@iconify/react";

export default function SocialNetworks() {
  return (
    <div className="flex justify-center items-center gap-4">
      <a
        href="https://www.instagram.com/academia_a_mais"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <Icon icon="mdi:instagram" className="text-3xl md:text-4xl" />
      </a>
      <a
        href="https://www.facebook.com/share/17GLShq1pt/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
      >
        <Icon icon="mdi:facebook" className="text-3xl md:text-4xl" />
      </a>
    </div>
  );
}
